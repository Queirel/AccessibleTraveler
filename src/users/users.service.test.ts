import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';
import { UsersEntity } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<UsersEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UsersEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<UsersEntity>>(
      getRepositoryToken(UsersEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const createUserDto = {
        firstname: 'John',
        password: 'password123',
        email: 'john@example.com',
      };

      const savedUser = {
        id: '1',
        firstname: 'John',
        password: 'password123',
        email: 'john@example.com',
      };

      jest.spyOn(repository, 'save').mockResolvedValue(savedUser);

      const result = await service.createUser(createUserDto);

      expect(repository.save).toHaveBeenCalledWith(createUserDto);
      expect(result).toEqual({ user: savedUser });
    });
  });

  describe('findAllUsers', () => {
    it('should return all users', async () => {
      const limit = 10;
      const offset = 0;
      const users = [
        { id: '1', firstname: 'John', email: 'john@example.com' },
        { id: '2', firstname: 'Jane', email: 'jane@example.com' },
      ];

      jest.spyOn(repository, 'find').mockResolvedValue(users);

      const result = await service.findAllUsers({ limit, offset });

      expect(repository.find).toHaveBeenCalledWith({
        skip: offset,
        take: limit,
      });
      expect(result).toEqual(users);
    });
  });

  describe('findUserById', () => {
    it('should return a user by id', async () => {
      const id = '1';
      const user = { id: '1', firstname: 'John', email: 'john@example.com' };

      jest.spyOn(repository, 'findOne').mockResolvedValue(user);

      const result = await service.findUserById(id);

      expect(repository.findOne).toHaveBeenCalledWith({ where: { id } });
      expect(result).toEqual(user);
    });

    it('should throw NotFoundException if user is not found', async () => {
      const id = '1';

      jest.spyOn(repository, 'findOne').mockResolvedValue(undefined);

      await expect(service.findUserById(id)).rejects.toThrowError(
        'User doesnt exist',
      );
    });

    it('should throw InternalServerErrorException if an error occurs', async () => {
      const id = '1';

      jest
        .spyOn(repository, 'findOne')
        .mockRejectedValue(new Error('Some error'));

      await expect(service.findUserById(id)).rejects.toThrowError('some error');
    });
  });

  describe('findUserByEmail', () => {
    it('should return a user by email', async () => {
      const email = 'john@example.com';
      const user = { id: '1', firstname: 'John', email: 'john@example.com' };

      jest.spyOn(repository, 'findOne').mockResolvedValue(user);

      const result = await service.findUserByEmail(email);

      expect(repository.findOne).toHaveBeenCalledWith({ where: { email } });
      expect(result).toEqual(user);
    });

    it('should throw NotFoundException if user is not found', async () => {
      const email = 'john@example.com';

      jest.spyOn(repository, 'findOne').mockResolvedValue(undefined);

      await expect(service.findUserByEmail(email)).rejects.toThrowError(
        'User doesnt exist',
      );
    });

    it('should throw InternalServerErrorException if an error occurs', async () => {
      const email = 'john@example.com';

      jest
        .spyOn(repository, 'findOne')
        .mockRejectedValue(new Error('Some error'));

      await expect(service.findUserByEmail(email)).rejects.toThrowError(
        'some error',
      );
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', async () => {
      const id = '1';

      jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 });

      const result = await service.deleteUser(id);

      expect(repository.delete).toHaveBeenCalledWith(id);
      expect(result).toEqual({ affected: 1 });
    });

    it('should throw InternalServerErrorException if an error occurs', async () => {
      const id = '1';

      jest
        .spyOn(repository, 'delete')
        .mockRejectedValue(new Error('Some error'));

      await expect(service.deleteUser(id)).rejects.toThrowError('some error');
    });
  });

  describe('updateUser', () => {
    it('should update a user', async () => {
      const id = '1';
      const body = { firstname: 'John' };

      jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 });

      const result = await service.updateUser(body, id);

      expect(repository.update).toHaveBeenCalledWith(id, body);
      expect(result).toEqual({ affected: 1 });
    });
  });
});
