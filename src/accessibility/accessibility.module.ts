import { Module } from '@nestjs/common';
import { AccessibilityService } from './accessibility.service';
import { AccessibilityController } from './accessibility.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessibilityEntity } from './entities/accessibility.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccessibilityEntity])],
  controllers: [AccessibilityController],
  providers: [AccessibilityService],
  exports: [AccessibilityService],
})
export class AccessibilityModule {}
