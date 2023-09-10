import { Module } from '@nestjs/common';
import { PlaceAccService } from './place-acc.service';
import { PlaceAccController } from './place-acc.controller';

@Module({
  controllers: [PlaceAccController],
  providers: [PlaceAccService]
})
export class PlaceAccModule {}
