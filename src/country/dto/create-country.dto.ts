export class CreateCountryDto {}
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
// import { ACCESS_LEVEL, ROLES } from 'src/constants/roles';

export class CountryDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  image: string;
}
