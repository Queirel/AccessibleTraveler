import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AccessibilityService } from './accessibility.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('accessibility')
export class AccessibilityController {
  constructor(private readonly accessibilityService: AccessibilityService) {}

  @ApiTags('Accessibility')
  @Get('seed')
  public async seedAccessibility() {
    await this.accessibilityService.seedAccessibility({
      name: 'Visual',
      description: 'Visual',
      icon: ' ',
    });
    await this.accessibilityService.seedAccessibility({
      name: 'Motriz',
      description: 'Motriz',
      icon: ' ',
    });
    await this.accessibilityService.seedAccessibility({
      name: 'Auditiva',
      description: 'Auditiva',
      icon: ' ',
    });
    await this.accessibilityService.seedAccessibility({
      name: 'TEA',
      description: 'TEA',
      icon: ' ',
    });
    await this.accessibilityService.seedAccessibility({
      name: 'Cognitiva',
      description: 'Cognitiva',
      icon: ' ',
    });

    return await this.accessibilityService.findAllAccessibilities();
  }

  @ApiTags('Accessibility')
  @Post()
  public async createAccessibility(@Body() body) {
    return await this.accessibilityService.createAccessibility(body);
  }

  @ApiTags('Accessibility')
  @Get()
  public async findAllAccessibilities() {
    return await this.accessibilityService.findAllAccessibilities();
  }

  @ApiTags('Accessibility')
  @Get(':id')
  public async findAccessibilityById(@Param('id') id: string) {
    return await this.accessibilityService.findAccessibilityById(id);
  }

  @ApiTags('Accessibility')
  @Delete(':id')
  public async deleteAccessibility(@Param('id') id: string) {
    return await this.accessibilityService.deleteAccessibility(id);
  }
}
