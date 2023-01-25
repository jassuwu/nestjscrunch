import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
    @ApiProperty({
        description: 'Email (Not Empty)',
        example: 'example@example.com',
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'Password (Not Empty)',
        example: 'super-strong-password',
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}