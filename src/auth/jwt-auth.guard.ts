// // jwt.guard.ts
// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { CognitoJwtVerifier } from 'aws-jwt-verify';
// import { cognitoVerifier } from 'src/helper/cognito';

// @Injectable()
// export class JwtGuard implements CanActivate {
//   constructor(
//     private readonly options: any /* Configura tus opciones de verificación aquí */,
//   ) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request = context.switchToHttp().getRequest();
//     // const token = cognitoVerifier(token);

//     if (!token) {
//       return false; // Si no hay token, se deniega el acceso
//     }

//     // Verificar el token con aws-jwt-verify
//     try {
//       return token;
//       //   const payload = await verify(token, this.options);
//       //   request.user = payload; // Agregar el payload decodificado a la solicitud para usarlo en los controladores
//       //   return true; // Si el token es válido, se permite el acceso
//     } catch (error) {
//       return false; // Si hay un error al verificar el token, se deniega el acceso
//     }
//   }

//   //   private extractJwtFromRequest(request: any): string | null {
//   // Implementa la lógica para extraer el token JWT de la solicitud (por ejemplo, desde los headers, cookies, etc.)
//   // Devuelve el token JWT o null si no se encuentra
//   //   }
// }
