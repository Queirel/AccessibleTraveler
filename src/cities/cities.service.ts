import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CitiesEntity } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(CitiesEntity)
    private readonly cityRepository: Repository<CitiesEntity>,
  ) {}

  public async createCity(body) {
    return await this.cityRepository.save(body);
  }

  public async findAllCities() {
    const city = await this.cityRepository.find();
    return city;
  }

  public async findCityById(id: string): Promise<CitiesEntity> {
    const city: CitiesEntity = await this.cityRepository.findOne({
      where: { id },
    });
    return city;
  }

  public async deleteCity(id: string) {
    const city = await this.cityRepository.delete(id);
    return city;
  }
}
