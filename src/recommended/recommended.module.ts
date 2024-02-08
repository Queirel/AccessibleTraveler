import { Module } from '@nestjs/common';
import { RecommendedService } from './recommended.service';
import { RecommendedController } from './recommended.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecommendedEntity } from './entities/recommended.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecommendedEntity])],
  controllers: [RecommendedController],
  providers: [RecommendedService],
  exports: [RecommendedService],
})
export class RecommendedModule {}
