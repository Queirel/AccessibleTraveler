import { PartialType } from '@nestjs/swagger';
import { CreateRecommendedDto } from './create-recommended.dto';

export class UpdateRecommendedDto extends PartialType(CreateRecommendedDto) {}
