import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Patch,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiParam({
    name: ' ',
  })
  @ApiTags('Users')
  @Post()
  public async registerUser(@Body() body) {
    return await this.usersService.createUser(body);
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
  public async findAllUsers() {
    return await this.usersService.findAllUsers();
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
