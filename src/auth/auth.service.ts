import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import { hash, verify } from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {

    }
    async register(dto: AuthDto) {
        const hashedPassword = await hash(dto.password);

        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash: hashedPassword,
                },
            });
            delete user.hash;
            return user;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials taken.');
                }
            }
            throw error;
        }
    }
    async login(dto: AuthDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            }
        });

        if (!user) {
            throw new ForbiddenException(
                'Credentials incorrect.'
            );
        }

        const pwMatches = await verify(user.hash, dto.password);

        if (!pwMatches) {
            throw new ForbiddenException(
                'Passwords don\'t match.'
            );
        }

        delete user.hash;
        return user;
    }
}