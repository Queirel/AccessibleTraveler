import { Injectable } from '@nestjs/common';
import { CreateRecommendedDto } from './dto/create-recommended.dto';
import { UpdateRecommendedDto } from './dto/update-recommended.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RecommendedEntity } from './entities/recommended.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecommendedService {
  constructor(
    @InjectRepository(RecommendedEntity)
    private readonly recommendedRepository: Repository<RecommendedEntity>,
  ) {}

  public async createRecommended(body) {
    return await this.recommendedRepository.save(body);
  }

  public async findAllRecommended() {
    const recommended = await this.recommendedRepository.find();
    return recommended;
  }

  public async findRecommendedById(id: string): Promise<RecommendedEntity> {
    const recommended: RecommendedEntity =
      await this.recommendedRepository.findOne({
        where: { id },
      });
    return recommended;
  }

  public async deleteRecommended(id: string) {
    const recommended = await this.recommendedRepository.delete(id);
    return recommended;
  }
}
