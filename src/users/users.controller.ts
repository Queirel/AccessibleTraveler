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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationDto } from 'src/helper/pagination.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiParam({
    name: ' ',
  })
  @ApiTags('Users')
  @Post()
  public async registerUser(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto,
  ) {
    return await this.usersService.createUser(createUserDto);
  }

  @Put(':id')
  public async updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: any,
  ) {
    return await this.usersService.updateUser(body, id);
  }

  @ApiTags('Users')
  @Get()
  public async findAllUsers(@Query() pagination: PaginationDto): Promise<any> {
    return await this.usersService.findAllUsers(pagination);
  }

  @ApiTags('Users')
  @Get(':id')
  public async findUserById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.usersService.findUserById(id);
  }

  @ApiTags('Users')
  @Delete(':id')
  public async deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return await this.usersService.deleteUser(id);
  }
}
