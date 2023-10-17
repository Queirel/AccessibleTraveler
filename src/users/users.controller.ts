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

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }
  @ApiParam({
    name: ' ',
  })
  @ApiTags('Users')
  @Post()
  public async registerUser(@Body() body) {
    return await this.usersService.createUser(body);
  }

  @Put(':id')
  public async updateUser(@Param('id') id: string, @Body() body: any) {
    return await this.usersService.updateUser(body, id);
  }

  @ApiTags('Users')
  @Get()
  public async findAllUsers() {
    return await this.usersService.findAllUsers();
  }

  @ApiTags('Users')
  @Get(':id')
  public async findUserById(@Param('id') id: string) {
    return await this.usersService.findUserById(id);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body(body)) {
  //   return this.usersService.updateUser(+id);
  // }

  @ApiTags('Users')
  @Delete(':id')
  public async deleteUser(@Param('id') id: string) {
    return await this.usersService.deleteUser(id);
  }
}
