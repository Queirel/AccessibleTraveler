import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  NotFoundException,
} from '@nestjs/common';
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
    try {
      return await this.commentsService.createComment(body);
    } catch {}
  }

  @ApiTags('Comments')
  @Get()
  public async findAllComments() {
    try {
      return await this.commentsService.findAllComments();
    } catch (err) {
      throw new NotFoundException('Comments not found');
    }
  }

  @ApiTags('Comments')
  @Get(':id')
  public async findCommentById(@Param('id', ParseUUIDPipe) id: string) {
    try {
      return await this.commentsService.findCommentById(id);
    } catch (err) {
      throw new NotFoundException('Comment not found');
    }
  }

  @ApiTags('Comments')
  @Delete(':id')
  public async deleteComment(@Param('id', ParseUUIDPipe) id: string) {
    try {
      return await this.commentsService.deleteComment(id);
    } catch {}
  }
}
