import { Module } from '@nestjs/common';
import { UserAccService } from './user-acc.service';
import { UserAccController } from './user-acc.controller';

@Module({
  controllers: [UserAccController],
  providers: [UserAccService],
})
export class UserAccModule {}
