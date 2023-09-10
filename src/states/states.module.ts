import { Module } from '@nestjs/common';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateEntity } from './entities/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StateEntity])],
  controllers: [StatesController],
  providers: [StatesService],
})
export class StatesModule {}
