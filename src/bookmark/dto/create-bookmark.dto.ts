import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateBookmarkDto {
    @ApiProperty({
        description: 'Title (Not Empty)',
        example: 'BookmarkTitle',
    })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({
        description: 'Description (Optional)',
        example: 'This is a example description of the bookmark description attribute.',
    })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({
        description: 'Link (Not Empty)',
        example: 'https://example.com',
    })
    @IsString()
    @IsNotEmpty()
    link: string;
}