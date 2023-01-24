import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService) {

    }
    login() {
        return { message: `LOGGED IN`, error: false };
    }
    register() {
        return { message: `REGISTRATION TIME`, error: false };
    }
}