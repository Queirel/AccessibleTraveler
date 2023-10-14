import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesEntity } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoriesEntity)
    private readonly categoryRepository: Repository<CategoriesEntity>,
  ) {}

  public async createCategory(body) {
    return await this.categoryRepository.save(body);
  }

  public async seedCategory(seed) {
    return await this.categoryRepository.save(seed);
  }

  public async findAllCategories() {
    const category = await this.categoryRepository.find();
    return category;
  }

  public async findCategoryById(id: string): Promise<CategoriesEntity> {
    const category: CategoriesEntity =
      await this.categoryRepository.findOne({
        where: { id },
      });
    return category;
  }

  public async deleteCategory(id: string) {
    const category = await this.categoryRepository.delete(id);
    return category;
  }
}
