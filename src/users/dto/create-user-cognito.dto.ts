import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserCognitoDto {
  @IsEmail()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  @MinLength(5)
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  @MinLength(5)
  password: string;
}
