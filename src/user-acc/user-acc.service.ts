import { Injectable } from '@nestjs/common';
import { CreateUserAccDto } from './dto/create-user-acc.dto';
import { UpdateUserAccDto } from './dto/update-user-acc.dto';

@Injectable()
export class UserAccService {
  create(createUserAccDto: CreateUserAccDto) {
    return 'This action adds a new userAcc';
  }

  findAll() {
    return `This action returns all userAcc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAcc`;
  }

  update(id: number, updateUserAccDto: UpdateUserAccDto) {
    return `This action updates a #${id} userAcc`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAcc`;
  }
}
