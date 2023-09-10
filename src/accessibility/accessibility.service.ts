import { Injectable } from '@nestjs/common';
import { CreateAccessibilityDto } from './dto/create-accessibility.dto';
import { UpdateAccessibilityDto } from './dto/update-accessibility.dto';

@Injectable()
export class AccessibilityService {
  create(createAccessibilityDto: CreateAccessibilityDto) {
    return 'This action adds a new accessibility';
  }

  findAll() {
    return `This action returns all accessibility`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accessibility`;
  }

  update(id: number, updateAccessibilityDto: UpdateAccessibilityDto) {
    return `This action updates a #${id} accessibility`;
  }

  remove(id: number) {
    return `This action removes a #${id} accessibility`;
  }
}
