// jwt.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements NestInterceptor {
  constructor(private readonly token: string) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    // Agregar el token JWT a los encabezados de la solicitud saliente
    request.headers['Authorization'] = `Bearer ${this.token}`;
    console.log(request.headers.Authorization);
    console.log('asd');

    return next.handle();
  }
}
