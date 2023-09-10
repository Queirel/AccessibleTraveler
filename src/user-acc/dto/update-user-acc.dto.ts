import { PartialType } from '@nestjs/swagger';
import { CreateUserAccDto } from './create-user-acc.dto';

export class UpdateUserAccDto extends PartialType(CreateUserAccDto) {}
