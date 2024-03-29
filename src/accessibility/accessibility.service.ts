import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccessibilityEntity } from './entities/accessibility.entity';
import { Repository } from 'typeorm';
// import { seedAccessibilities } from 'src/helper/seed/accessibilitySeed';

@Injectable()
export class AccessibilityService {
  constructor(
    @InjectRepository(AccessibilityEntity)
    private readonly accessibilityRepository: Repository<AccessibilityEntity>,
  ) {}

  public async createAccessibility(body) {
    return await this.accessibilityRepository.save(body);
  }

  // public async seedAccessibility(seed) {
  //   return await this.accessibilityRepository.save(seed);
  // }

  // public async seedAccessibilities() {
  //   await this.accessibilityRepository.query(
  //     'TRUNCATE TABLE "accessibility" CASCADE',
  //   );
  //   await this.accessibilityRepository.insert(seedAccessibilities);
  // }

  public async findAllAccessibilities() {
    const accessibility = await this.accessibilityRepository.find();
    return accessibility;
  }

  public async findAccessibilityById(id: string): Promise<AccessibilityEntity> {
    const accessibility: AccessibilityEntity =
      await this.accessibilityRepository.findOne({
        where: { id },
      });
    return accessibility;
  }

  public async deleteAccessibility(id: string) {
    const accessibility = await this.accessibilityRepository.delete(id);
    return accessibility;
  }

  public async updateAccessibility(body: any, id: any) {
    const accessibility = await this.accessibilityRepository.update(id, body);
    return accessibility;
  }
}
