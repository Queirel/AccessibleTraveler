import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { cognitoVerifier } from 'src/helper/cognito';

@Injectable()
export class AuthiGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest(); 
    const token = request.headers.authorization
    const verify = cognitoVerifier(token);
    return verify
  }
}
