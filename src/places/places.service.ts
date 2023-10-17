import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceEntity } from './entities/place.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(PlaceEntity)
    private readonly placeRepository: Repository<PlaceEntity>,
  ) {}

  public async createPlace(body) {
    return await this.placeRepository.save(body);
  }

  public async findAllPlaces() {
    const place = await this.placeRepository.find();
    return place;
  }

  public async updatePlace(body: any, id: any) {
    const place = await this.placeRepository.update(id, body);
    return place;
  }

  public async findPlaceById(id: string): Promise<PlaceEntity> {
    const place: PlaceEntity = await this.placeRepository.findOne({
      where: { id },
    });
    return place;
  }

  public async deletePlace(id: string) {
    const place = await this.placeRepository.delete(id);
    return place;
  }
}
