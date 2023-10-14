import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiTags('Comments')
  @Post()
  public async createComment(@Body() body) {
    return await this.commentsService.createComment(body);
  }

  @ApiTags('Comments')
  @Get()
  public async findAllComments() {
    return await this.commentsService.findAllComments();
  }

  @ApiTags('Comments')
  @Get(':id')
  public async findCommentById(@Param('id') id: string) {
    return await this.commentsService.findCommentById(id);
  }

  @ApiTags('Comments')
  @Delete(':id')
  public async deleteComment(@Param('id') id: string) {
    return await this.commentsService.deleteComment(id);
  }
}
