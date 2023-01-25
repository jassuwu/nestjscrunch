import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";

export class EditUserDto {

    @ApiProperty({
        description: 'email address (Optional)',
        example: 'example@example.com',
    })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty({
        description: 'firstName (Optional)',
        example: 'John',
    })
    @IsString()
    @IsOptional()
    firstName?: string;


    @ApiProperty({
        description: 'lastName (Optional)',
        example: 'Doe',
    })
    @IsString()
    @IsOptional()
    lastName?: string;
}