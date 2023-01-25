import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class EditBookmarkDto {
    @ApiProperty({
        description: 'Title (Optional)',
        example: 'BookmarkTitle',
    })

    @IsString()
    @IsOptional()
    title?: string;

    @ApiProperty({
        description: 'Description (Optional)',
        example: 'This is a example description of the bookmark description attribute.',
    })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({
        description: 'Link (Optional)',
        example: 'https://example.com',
    })
    @IsString()
    @IsOptional()
    link?: string;
}