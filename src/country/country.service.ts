import { Injectable } from '@nestjs/common';
import { CountryEntity } from './entities/country.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countryRepository: Repository<CountryEntity>,
  ) {}

  public async createCountry(body) {
    return await this.countryRepository.save(body);
  }

  public async findAllCountries() {
    const country = await this.countryRepository.find();
    return country;
  }

  public async findCountryById(id: string): Promise<CountryEntity> {
    const country: CountryEntity = await this.countryRepository.findOne({
      where: { id },
    });
    return country;
  }

  public async deleteCountry(id: string) {
    const country = await this.countryRepository.delete(id);
    return country;
  }
}
