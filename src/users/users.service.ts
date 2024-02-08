import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationDto } from 'src/helper/pagination.dto';
// import {
//   AuthenticationDetails,
//   CognitoUser,
//   CognitoUserAttribute,
//   CognitoUserPool,
//   CognitoUserSession,
// } from 'amazon-cognito-identity-js';
// import { registrarUsuario } from '../helper/cognito';
@Injectable()
export class UsersService {
  // private userPool: CognitoUserPool;
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {
    // this.userPool = new CognitoUserPool({
    //   UserPoolId: 'us-east-2_0jNIt3K3t',
    //   ClientId: 'buarncjnc7rpqrro0i9vagu26',
    // });
  }

  public async createUser(createUserDto: CreateUserDto) {
    // try {
    // createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
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
      if (!user) throw new NotFoundException('User doesnt exist');
      return user;
    } catch (error) {
      throw new InternalServerErrorException('some error');
    }
  }

  public async findUserByEmail(email: string): Promise<UsersEntity> {
    try {
      const user: UsersEntity = await this.userRepository.findOne({
        where: { email },
      });
      if (!user) throw new NotFoundException('User doesnt exist');
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

  // --------------------------------------------------------------
  // --------------------------------------------------------------
  // ---------------------- COGNITO -------------------------------
  // --------------------------------------------------------------
  // --------------------------------------------------------------

  // Crea usuario en cognito
  // public async createUserCognito(registerRequest: {
  //   email: string;
  //   password: string;
  // }) {
  //   const { email, password } = registerRequest;
  //   return new Promise((resolve, reject) => {
  //     return this.userPool.signUp(
  //       email,
  //       password,
  //       [
  //         new CognitoUserAttribute({ Name: 'email', Value: email }),
  //         // new CognitoUserAttribute({ Name: 'password', Value: password }),
  //       ],
  //       null,
  //       (err, result) => {
  //         if (!result) {
  //           reject(err);
  //         } else {
  //           resolve(result.user);
  //         }
  //       },
  //     );
  //   });
  // }

  // //verifica el mail de cognito
  // verifyUser(email, verificationCode) {
  //   return new Promise((resolve, reject) => {
  //     return new CognitoUser({
  //       Username: email,
  //       Pool: this.userPool,
  //     }).confirmRegistration(verificationCode, true, (err, result) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(result);
  //       }
  //     });
  //   });
  // }
  // cognitoVerify() {
  //   // return cognitoVerifier();
  // }

  // authenticateUser(loginRequest: { email: string; password: string }) {
  //   const { email, password } = loginRequest;

  //   const authenticationDetails = new AuthenticationDetails({
  //     Username: email,
  //     Password: password,
  //   });

  //   const userData = {
  //     Username: email,
  //     Pool: this.userPool,
  //   };

  //   const newUser = new CognitoUser(userData);

  //   return new Promise<any>((resolve, reject) => {
  //     return newUser.authenticateUser(authenticationDetails, {
  //       onSuccess: (result) => {
  //         resolve(result.getAccessToken().getJwtToken());
  //       },
  //       onFailure: (err) => {
  //         reject(err);
  //       },
  //     });
  //   });
  // }
}
