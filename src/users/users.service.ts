import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationDto } from 'src/helper/pagination.dto';
// import { registrarUsuario } from '../helper/cognito';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    // try {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    // const cognito = registrarUsuario(
    //   createUserDto.firstname,
    //   createUserDto.password,
    //   createUserDto.email,
    // );
    const user = await this.userRepository.save(createUserDto);
    return {
      user,
      // cognito,
    };
  }

  public async findAllUsers({
    limit,
    offset,
  }: PaginationDto): Promise<UsersEntity[]> {
    return await this.userRepository.find({ skip: offset, take: limit });
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

  public async updateUser(body: any, id: any) {
    const user = await this.userRepository.update(id, body);
    return user;
  }
}
