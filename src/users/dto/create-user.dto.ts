export class CreateUserDto {}
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
// import { ACCESS_LEVEL, ROLES } from 'src/constants/roles';
import { CountryEntity } from 'src/country/entities/country.entity';
import { UsersEntity } from '../entities/user.entity';
import { AccessibilityEntity } from 'src/accessibility/entities/accessibility.entity';

export class UserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lastname: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  image: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsEnum(ROLES)
  // role: ROLES;
}

export class UserToCountrytDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  countryId: CountryEntity;
}

export class UserAccDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  user: string | UsersEntity;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  accessibility: string | AccessibilityEntity;
}

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
