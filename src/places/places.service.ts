import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceEntity } from './entities/place.entity';
import { Repository } from 'typeorm';
import { seedPlaces } from 'src/seed/seed/placeSeed';
import { CategoriesEntity } from 'src/categories/entities/category.entity';
import { CreatePlaceDto } from './dto/create-place.dto';
import { googlePlaceGetById, googlePlaceGetId } from 'src/helper/google-place';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(PlaceEntity)
    private readonly placeRepository: Repository<PlaceEntity>,
    @InjectRepository(CategoriesEntity)
    private categoryRepository: Repository<CategoriesEntity>,
  ) {}

  public async createPlace(createPlaceDto) {
    // try {
    //   const category = await this.categoryRepository.findOne({
    //     where: { id: createPlaceDto.categoryid },
    //   });
    //   console.log(category);
    //   console.log(createPlaceDto);
    //   if (!category) {
    //     throw new NotFoundException(
    //       'La categoría con el ID especificado no existe',
    //     );
    //   }
    // createPlaceDto.categoryid = '0accd802-aae5-48dd-b057-5e251f022454';
    return await this.placeRepository.save(createPlaceDto);
    // await this.placeRepository.query(
    //   `INSERT INTO places (name, description, placemapid, categoryid) 
    //   VALUES ("aaaaaaaas","aaaaaaaad","aaaaaaaaf","0accd802-aae5-48dd-b057-5e251f022454")`,
    // );
    // } catch (err) {
    //   throw new Error(err)
    // }
  }

  public async findAllPlaces() {
    const place = await this.placeRepository.find();
    // const place: PlaceEntity[] = await this.placeRepository
    //   .createQueryBuilder('places')
    //   .leftJoin('places.category', 'category')
    //   .getRawMany();
    return place;
  }

  public async updatePlace(body: any, id: string) {
    const place = await this.placeRepository.update(id, body);
    return place;
  }

  public async findPlaceById(id: string): Promise<PlaceEntity> {
    // const place: PlaceEntity = await this.placeRepository
    //   .createQueryBuilder('places')
    //   .leftJoinAndSelect('places.category', 'category')
    //   .where({ id })
    //   .getOne();
    // return place;

    const place: PlaceEntity = await this.placeRepository.findOne({
      where: { id },
    });
    return place;
  }

  public async deletePlace(id: string) {
    const place = await this.placeRepository.delete(id);
    return place;
  }

  // public async getPlaceId(body: string) {
  //   const place = await googlePlaceGetId(body);
  //   return place;
  // }

  public async googlePlaceGetById(placeid: any) {
    const place = await googlePlaceGetById(placeid);
    return place;
  }

  // public async seedPlaces() {
  //   await this.placeRepository.query('TRUNCATE TABLE "places" CASCADE');
  //   await this.placeRepository.insert(seedPlaces);
  // }
}
