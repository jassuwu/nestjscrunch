import { Controller, UseGuards, Get, Post, Patch, Delete, Param, ParseIntPipe, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/auth/decorators';
import { JwtGuard } from 'src/auth/guard';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@UseGuards(JwtGuard)
@ApiTags('Bookmark')
@ApiSecurity('jwt')
@Controller('bookmarks')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService) { }


    @Get()
    @ApiOkResponse({
        description: 'List of bookmarks returned.'
    })
    getBookmarks(@GetUser('id') userId: number) {
        return this.bookmarkService.getBookmarks(userId);
    }

    @Get(':id')
    @ApiOkResponse({
        description: 'Bookmark of the specified id returned.'
    })
    getBookmarkById(
        @GetUser('id') userId: number,
        @Param('id', ParseIntPipe) bookmarkId: number
    ) {
        return this.bookmarkService.getBookmarkById(userId, bookmarkId);
    }

    @Post()
    @ApiCreatedResponse({
        description: 'The new bookmark has been successfully created.'
    })
    createBookmark(@GetUser('id') userId: number, @Body() dto: CreateBookmarkDto) {
        return this.bookmarkService.createBookmark(userId, dto);
    }

    @Patch(':id')
    editBookmark(@GetUser('id') userId: number, @Param('id', ParseIntPipe) bookmarkId: number, @Body() dto: EditBookmarkDto) {
        return this.bookmarkService.editBookmark(userId, bookmarkId, dto);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    deleteBookmark(@GetUser('id') userId: number, @Param('id', ParseIntPipe) bookmarkId: number) {
        return this.bookmarkService.deleteBookmark(userId, bookmarkId);
    }
}
