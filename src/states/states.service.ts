import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEntity } from './entities/state.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>,
  ) {}

  public async createState(body) {
    return await this.stateRepository.save(body);
  }

  public async findAllStates() {
    const state = await this.stateRepository.find();
    return state;
  }

  public async findStateById(id: string): Promise<StateEntity> {
    const state: StateEntity = await this.stateRepository.findOne({
      where: { id },
    });
    return state;
  }

  public async deleteState(id: string) {
    const state = await this.stateRepository.delete(id);
    return state;
  }
}
