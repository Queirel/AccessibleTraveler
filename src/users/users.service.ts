import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  public async createUser(body) {
    // try {
    body.password = await bcrypt.hash(body.password, 10);
    return await this.userRepository.save(body);
  }

  public async findAllUsers() {
    const users = await this.userRepository.find();
    return users;
  }

  public async findUserById(id: string): Promise<UsersEntity> {
    try {
      const user: UsersEntity = await this.userRepository.findOne({
        where: { id },
      });
      return user;
    } catch (error) {
      throw new InternalServerErrorException('some error');
    }
  }

  public async deleteUser(id: string) {
    try {
      const user = await this.userRepository.delete(id);
      return user;
    } catch (error) {
      throw new InternalServerErrorException('some error');
    }
  }

  public async updateUser(body, id) {
    // try {
      const user = await this.userRepository.update(id, body);
      // if (user.affected === 0) {
        // throw new ErrorManager({
        //   type: 'BAD_REQUEST',
        //   message: 'No se pudo actualizar',
        // });
      // }
      return user;
    // } catch (error) {
    //   throw new InternalServerErrorException('some error');
    // }
  }

  // update(id: number) {
  //   return `This action updates a #${id} user`;
  // }
}
