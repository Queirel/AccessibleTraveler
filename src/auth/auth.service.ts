import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
} from 'amazon-cognito-identity-js';

@Injectable()
export class AuthService {
  // private userPool: CognitoUserPool
  constructor(private usersService: UsersService) {}

  private userPool = new CognitoUserPool({
    UserPoolId: 'us-east-2_0jNIt3K3t',
    ClientId: 'buarncjnc7rpqrro0i9vagu26',
  });

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

    const newUser = new CognitoUser(userData);

    return new Promise<any>((resolve, reject) => {
      return newUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          resolve(result.getAccessToken().getJwtToken());
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
}
