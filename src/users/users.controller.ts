import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Put,
  ValidationPipe,
  Query,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationDto } from 'src/helper/pagination.dto';
import { CreateUserCognitoDto } from './dto/create-user-cognito.dto';
import { AuthiGuard } from 'src/authi/authi.guard';
// import { JwtGuard } from '../auth/jwt-auth.guard';
import { seedUsers } from '../seed/seed/userSeed';
import { UsersEntity } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @ApiParam({
  //   name: ' ',
  // })
  // @ApiTags('Users')
  // @Post()
  // public async registerUser(
  //   @Body(new ValidationPipe()) createUserDto: CreateUserDto,
  // ) {
  //   const { email, password } = createUserDto;
  //   const cognitoData = { email, password };
  //   const cognito = await this.usersService.createUserCognito(cognitoData);
  //   const user = await this.usersService.createUser(createUserDto);
  //   return { cognito, user };
  // }

  // @Post('login')
  // public async authenticateUser(
  //   @Body(new ValidationPipe()) createUserDto: CreateUserCognitoDto,
  // ) {
  //   const { email, password } = createUserDto;
  //   const cognitoData = { email, password };
  //   return await this.usersService.authenticateUser(cognitoData);
  // }

  // @Get('jwt')
  // public async cognitoVerify() {
  //   return await this.usersService.cognitoVerify();
  // }

  // @Get('seed')
  // public async seedUsers() {
  //   return await this.usersService.seedUsers();
  // }

  @Put(':id')
  public async updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: any,
  ) {
    try {
      return await this.usersService.updateUser(body, id);
    } catch {}
  }

  @ApiTags('Users')
  @Get()
  // @UseGuards(AuthiGuard)
  public async findAllUsers(
    @Query() pagination: PaginationDto,
  ): Promise<UsersEntity[]> {
    try {
      return await this.usersService.findAllUsers(pagination);
    } catch (err) {
      throw new NotFoundException('Users not found');
    }
  }

  @ApiTags('Users')
  @Get(':id')
  public async findUserById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<UsersEntity> {
    try {
      return await this.usersService.findUserById(id);
    } catch (err) {
      throw new NotFoundException('User not found');
    }
  }

  @ApiTags('Users')
  @Get('email/:email')
  public async findUserByEmail(
    @Param('email') email: string,
  ): Promise<UsersEntity> {
    try {
      return await this.usersService.findUserByEmail(email);
    } catch (err) {
      throw new NotFoundException('User not found');
    }
  }

  @ApiTags('Users')
  @Delete(':id')
  public async deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    try {
      return await this.usersService.deleteUser(id);
    } catch {}
  }
}
