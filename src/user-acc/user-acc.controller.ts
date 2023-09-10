import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAccService } from './user-acc.service';
import { CreateUserAccDto } from './dto/create-user-acc.dto';
import { UpdateUserAccDto } from './dto/update-user-acc.dto';

@Controller('user-acc')
export class UserAccController {
  constructor(private readonly userAccService: UserAccService) {}

  @Post()
  create(@Body() createUserAccDto: CreateUserAccDto) {
    return this.userAccService.create(createUserAccDto);
  }

  @Get()
  findAll() {
    return this.userAccService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAccService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserAccDto: UpdateUserAccDto) {
    return this.userAccService.update(+id, updateUserAccDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAccService.remove(+id);
  }
}
