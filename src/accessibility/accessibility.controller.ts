import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccessibilityService } from './accessibility.service';
import { CreateAccessibilityDto } from './dto/create-accessibility.dto';
import { UpdateAccessibilityDto } from './dto/update-accessibility.dto';

@Controller('accessibility')
export class AccessibilityController {
  constructor(private readonly accessibilityService: AccessibilityService) {}

  @Post()
  create(@Body() createAccessibilityDto: CreateAccessibilityDto) {
    return this.accessibilityService.create(createAccessibilityDto);
  }

  @Get()
  findAll() {
    return this.accessibilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accessibilityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccessibilityDto: UpdateAccessibilityDto) {
    return this.accessibilityService.update(+id, updateAccessibilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accessibilityService.remove(+id);
  }
}
