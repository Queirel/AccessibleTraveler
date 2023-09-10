import { Injectable } from '@nestjs/common';
import { CreatePlaceAccDto } from './dto/create-place-acc.dto';
import { UpdatePlaceAccDto } from './dto/update-place-acc.dto';

@Injectable()
export class PlaceAccService {
  create(createPlaceAccDto: CreatePlaceAccDto) {
    return 'This action adds a new placeAcc';
  }

  findAll() {
    return `This action returns all placeAcc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} placeAcc`;
  }

  update(id: number, updatePlaceAccDto: UpdatePlaceAccDto) {
    return `This action updates a #${id} placeAcc`;
  }

  remove(id: number) {
    return `This action removes a #${id} placeAcc`;
  }
}
