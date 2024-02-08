import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceEntity } from '../places/entities/place.entity';
import { CategoriesEntity } from '../categories/entities/category.entity';
import { AccessibilityEntity } from '../accessibility/entities/accessibility.entity';
import { UsersEntity } from '../users/entities/user.entity';
import { RecommendedEntity } from '../recommended/entities/recommended.entity';
import { CommentsEntity } from '../comments/entities/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PlaceEntity,
      CategoriesEntity,
      AccessibilityEntity,
      UsersEntity,
      RecommendedEntity,
      CommentsEntity,
    ]),
  ],
  providers: [SeedService],
  controllers: [SeedController],
  exports: [SeedService],
})
export class SeedModule {}
