import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { seedUsers } from './seed/userSeed';
import { AccessibilityEntity } from '../accessibility/entities/accessibility.entity';
import { seedAccessibilities } from './seed/accessibilitySeed';
import { CategoriesEntity } from 'src/categories/entities/category.entity';
import { seedCategories } from 'src/seed/seed/categorySeed';
import { CommentsEntity } from '../comments/entities/comment.entity';
import { PlaceEntity } from '../places/entities/place.entity';
import { seedPlaces } from './seed/placeSeed';
import { RecommendedEntity } from '../recommended/entities/recommended.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
    @InjectRepository(AccessibilityEntity)
    private readonly accessibilityRepository: Repository<AccessibilityEntity>,
    @InjectRepository(CategoriesEntity)
    private readonly categoryRepository: Repository<CategoriesEntity>,
    @InjectRepository(CommentsEntity)
    private readonly commentsRepository: Repository<CommentsEntity>,
    @InjectRepository(PlaceEntity)
    private readonly placeRepository: Repository<PlaceEntity>,
    @InjectRepository(RecommendedEntity)
    private readonly recommendedRepository: Repository<RecommendedEntity>,
  ) {}

  public async seedAll() {
    //Seed Users
    await this.userRepository.query('TRUNCATE TABLE "users" CASCADE');
    await this.userRepository.insert(seedUsers);
    //Seed Accessibilities
    await this.accessibilityRepository.query(
      'TRUNCATE TABLE "accessibility" CASCADE',
    );
    await this.accessibilityRepository.insert(seedAccessibilities);
    //Seed Categories
    await this.categoryRepository.query('TRUNCATE TABLE "categories" CASCADE');
    await this.categoryRepository.insert(seedCategories);
    //Seed Places
    await this.placeRepository.query('TRUNCATE TABLE "places" CASCADE');
    await this.placeRepository.insert(seedPlaces);
    // //Seed Comments
    // await this.categoryRepository.query('TRUNCATE TABLE "comments" CASCADE');
    // await this.categoryRepository.insert(seedComments);
    // //Seed Recommended
    // await this.placeRepository.query('TRUNCATE TABLE "recommended" CASCADE');
    // await this.placeRepository.insert(seedRecommended);
  }
}
