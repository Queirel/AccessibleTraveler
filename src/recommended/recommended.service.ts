import { Injectable } from '@nestjs/common';
import { CreateRecommendedDto } from './dto/create-recommended.dto';
import { UpdateRecommendedDto } from './dto/update-recommended.dto';

@Injectable()
export class RecommendedService {
  create(createRecommendedDto: CreateRecommendedDto) {
    return 'This action adds a new recommended';
  }

  findAll() {
    return `This action returns all recommended`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recommended`;
  }

  update(id: number, updateRecommendedDto: UpdateRecommendedDto) {
    return `This action updates a #${id} recommended`;
  }

  remove(id: number) {
    return `This action removes a #${id} recommended`;
  }
}
