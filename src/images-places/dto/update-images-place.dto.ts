import { PartialType } from '@nestjs/swagger';
import { CreateImagesPlaceDto } from './create-images-place.dto';

export class UpdateImagesPlaceDto extends PartialType(CreateImagesPlaceDto) {}
