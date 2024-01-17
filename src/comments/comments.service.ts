import { Injectable } from '@nestjs/common';
// import { CreateCommentDto } from './dto/create-comment.dto';
// import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsEntity } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentsEntity)
    private readonly commentsRepository: Repository<CommentsEntity>,
  ) {}

  public async createComment(body) {
    return await this.commentsRepository.save(body);
  }

  public async findAllComments() {
    const comments = await this.commentsRepository.find()
    // .createQueryBuilder('comments')
    // .leftJoinAndSelect('comments.place', 'place')
    // .getMany();
    return comments;
  }

  public async findCommentById(id: string): Promise<CommentsEntity> {
    const comments: CommentsEntity = await this.commentsRepository.findOne({
      where: { id },
    });
    return comments;
  }

  public async deleteComment(id: string) {
    const comments = await this.commentsRepository.delete(id);
    return comments;
  }
}
