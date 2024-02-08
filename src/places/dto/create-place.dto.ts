import { ApiProperty } from '@nestjs/swagger';
import { uuid } from 'aws-sdk/clients/customerprofiles';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreatePlaceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @MinLength(2)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @MaxLength(200)
  @MinLength(2)
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  @MinLength(2)
  placemapid: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @MinLength(2)
  categoryid: string;
}