import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  // IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';
// import { UsersEntity } from '../entities/user.entity';
// import { AccessibilityEntity } from 'src/accessibility/entities/accessibility.entity';
// import { ACCESS_LEVEL, ROLES } from 'src/constants/roles';

export class CreateUserDto {
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
  @MinLength(8)
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @MinLength(2)
  firstname: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @MinLength(2)
  lastname: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  @MinLength(4)
  image: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsEnum(ROLES)
  // role: ROLES;
}

// export class UserToCountrytDTO {
//   @ApiProperty()
//   @IsNotEmpty()
//   @IsUUID()
//   countryId: CountryEntity;
// }

// export class UserAccDTO {
//   @ApiProperty()
//   @IsNotEmpty()
//   @IsUUID()
//   user: string | UsersEntity;

//   @ApiProperty()
//   @IsNotEmpty()
//   @IsUUID()
//   accessibility: string | AccessibilityEntity;
// }

// export class UserUpdateDTO {
//   @IsOptional()
//   @IsString()
//   firstName: string;
//   @IsOptional()
//   @IsString()
//   lastName: string;
//   @IsOptional()
//   @IsNumber()
//   age: number;
//   @IsOptional()
//   @IsString()
//   email: string;
//   @IsOptional()
//   @IsString()
//   username: string;

//   @IsOptional()
//   @IsString()
//   password: string;

// @IsOptional()
// @IsEnum(ROLES)
// role: ROLES;
// }

// export class UserToProjectDTO {
//   @IsNotEmpty()
//   @IsUUID()
//   user: UsersEntity;
//   @IsOptional()
//   @IsUUID()
//   project: ProjectsEntity;
// @IsNotEmpty()
// @IsEnum(ACCESS_LEVEL)
// accessLevel: ACCESS_LEVEL;
// }

// export class QuantityDTO {
//   @ApiProperty()
//   @IsNotEmpty()
//   @IsNumber()
//   quantity: number;
// }
