import { PartialType } from '@nestjs/swagger';
import { CreatePlaceAccDto } from './create-place-acc.dto';

export class UpdatePlaceAccDto extends PartialType(CreatePlaceAccDto) {}
