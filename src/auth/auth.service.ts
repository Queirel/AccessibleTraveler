import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  // CognitoJwtVerifier,
} from 'amazon-cognito-identity-js';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { CognitoJwtVerifier } from 'aws-jwt-verify';

@Injectable()
export class AuthService {
  // private userPool: CognitoUserPool
  // constructor(private readonly usersService: UsersService) {}
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  private userPool = new CognitoUserPool({
    UserPoolId: 'us-east-2_0jNIt3K3t',
    ClientId: 'buarncjnc7rpqrro0i9vagu26',
  });

  public async createUser(createUserDto: CreateUserDto) {
    const user = await this.userRepository.save(createUserDto);
    return {
      user,
    };
  }

  public async createUserCognito(registerRequest: {
    email: string;
    password: string;
  }) {
    const { email, password } = registerRequest;
    return new Promise((resolve, reject) => {
      return this.userPool.signUp(
        email,
        password,
        [
          new CognitoUserAttribute({ Name: 'email', Value: email }),
          // new CognitoUserAttribute({ Name: 'password', Value: password }),
        ],
        null,
        (err, result) => {
          if (!result) {
            reject(err);
          } else {
            resolve(result.user);
          }
        },
      );
    });
  }

  authenticateUser(loginRequest: { email: string; password: string }) {
    const { email, password } = loginRequest;

    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    const userData = {
      Username: email,
      Pool: this.userPool,
    };
    // console.log(userData);
    // console.log(email);
    const newUser = new CognitoUser(userData);
    return new Promise<any>((resolve, reject) => {
      return newUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          if (result.getAccessToken().getJwtToken()) {
            resolve(result.getAccessToken());
            // resolve(result.getAccessToken().getJwtToken());
            // resolve(result.getIdToken().payload.email);
            // console.log(result.getIdToken().payload.email)
          }
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }

  // async signIn(username: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findOne(username);
  //   if (user?.password !== pass) {
  //     throw new UnauthorizedException();
  //   }
  //   const { password, ...result } = user;
  //   // TODO: Generate a JWT and return it here
  //   // instead of the user object
  //   return result;
  // }

  public async cognitoJwtVerify(jwt) {
    const verifier = CognitoJwtVerifier.create({
      userPoolId: 'us-east-2_0jNIt3K3t',
      clientId: 'buarncjnc7rpqrro0i9vagu26',
      tokenUse: 'access',
    });
    console.log(jwt)
    try {
      const payload = await verifier.verify(jwt.jwtToken);
      console.log('Token is valid. Payload:', payload);
      return true
    } catch {
      console.log('Token not valid!');
      return false
    }
  }
}
