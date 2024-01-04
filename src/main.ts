import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import * as fs from 'fs';
// import path from 'path';

async function bootstrap() {
  //   const httpsOptions = {
  //     key: `-----BEGIN PRIVATE KEY-----
  // MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+c3dqvfZz736F
  // VLQ3A0vYkKEfHp+JZpqcy4ujTjZwAUJlsrP5k1OUFaRuVCxsc/KnsuM/H+Fqf9D+
  // Q5C9EBmeVeNIi3jwcldmrm17Bib1ttgH/wfMzKTFbi3R8Zb69S0ALEmNpHXRh0oY
  // ppdZb+zOyNg3CGa738+gi0ooz2u2z9FfbgjXr3obny+ekmuPqIn3Yg/8HPLn6S19
  // XGIue/elozCf42hGRSS09CVDqwRg1e31fj7p7PvNwVAOtWfErUwhc1g/EwKNxjzF
  // LW0KvM1A9W7AT47KszJyMBq+NAzI2aEohS0m/gINgHFePKM0C/v4m/vVHNu7M+BD
  // m3LAblGhAgMBAAECggEAA6Tl9g7odlNw0lBKmnrfqqcpzhSh7NkfwDxM0bUfaYk8
  // ogGHXBErmjvHx6yopPKbBAZyPrT3dTg44YSdcmCqfNMb5Dl2+PLXJUnVInN9r1nu
  // TEje91Y7GOQA0HGU9/xU/hna1nD9KCM0kcAuSTHRECvbp0Hr5VBlAqdnpdxCLV9I
  // FpTJuEOpOkQqmdR6rgM2A8Tlx6OMi9y0Pz0ej7JGzcPdshXj3rVGviukTtQaASD7
  // tvU7M8LNt6Kk0uokhSgyHGYGSvEAOIj9FFa8WNN+s/5oFwYbzh90Po1MmBOIRPXP
  // XDHfFcGKUSK10sw8GLyt/FialQ9fZto7Rt/12lxqmQKBgQD7p8f6D02y1O3m8PW7
  // LrUyd/vvjcPlf/KTgIQ4tQgZnlJrtmalbxLVc2u5/cC5YBCZqGCyeAgiH3FM0DxT
  // 8ykn/nfwxIpUb2zCJ6CMkGYOshKd98hcU7dJZqWLMN0S1MgcxaZ5e66puaFylpar
  // ryAHfVq2CT/FdIqVyap0YFp9RwKBgQDBvS+XWKLNAdCLo5evdjRBP+1dKEImbqYl
  // Oje+VcKQ2kQ44JbmpfegnouWdMkNGXmfcHGf1yZIpaom2w9x3m93tyo3gtgPYxqu
  // Mp16Fe5RPWi3/mHfiLEeHzuGsnf6QtpVBe+WwaNwR2meheaz89GtOp/OpK0471yB
  // Xr3O8pmN1wKBgQCKcpDTIo41f21uq0wVcangHSBud0i5vv1eZsrXQ8k0BuUDOzMX
  // epca9Ufj6BWaJp6bWoXwSZb35uJ3RuyZpuISja3AuO/9adukqRZrnpl3JkKVw5bo
  // LGpeqGkUvYoybPu20Io4tXGvEGAg4XX89/igBjfchBQgdnAz3eG36rZ9ywKBgCK/
  // 90hTOqhA2hIh3rQ3JHpLqBycevj/wcdNoO//2+01aSU2i3qFbFwf8/OhsOorlpgV
  // iBvecFx5coKTqjqHZkD31pesXWqtIPz70Skzw9JIjH7sHswEbZh0i63GVyTJVvYH
  // IYlN5C3gcT5g0BeY9RP4Pu/Gs9dRf6sovizfcNFzAoGAOTh3dT0wkPE21zpLRx1J
  // dHLOXPWM+5Sy3Aoex0QNmsZ1WcMfErzWhJODp1bsk+V1f4zPw9DtelbRAzfOc2gm
  // JEUCXUaT0WW2Kon3GuxmD5YmWFBTE1SxNhzYCVM4MoJDnnhs6fmPAHJa4bYjRFoF
  // GrcVaUIrFYpoZtpOEwcYOPY=
  // -----END PRIVATE KEY-----`,
  //     cert: `-----BEGIN CERTIFICATE-----
  // MIIDETCCAfkCFGihkN9kremLZH4ItyDRbdJ3kEoFMA0GCSqGSIb3DQEBCwUAMEUx
  // CzAJBgNVBAYTAkFVMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRl
  // cm5ldCBXaWRnaXRzIFB0eSBMdGQwHhcNMjMxMTA1MDkwMjM1WhcNMjMxMjA1MDkw
  // MjM1WjBFMQswCQYDVQQGEwJBVTETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UE
  // CgwYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOC
  // AQ8AMIIBCgKCAQEAvnN3ar32c+9+hVS0NwNL2JChHx6fiWaanMuLo042cAFCZbKz
  // +ZNTlBWkblQsbHPyp7LjPx/han/Q/kOQvRAZnlXjSIt48HJXZq5tewYm9bbYB/8H
  // zMykxW4t0fGW+vUtACxJjaR10YdKGKaXWW/szsjYNwhmu9/PoItKKM9rts/RX24I
  // 1696G58vnpJrj6iJ92IP/Bzy5+ktfVxiLnv3paMwn+NoRkUktPQlQ6sEYNXt9X4+
  // 6ez7zcFQDrVnxK1MIXNYPxMCjcY8xS1tCrzNQPVuwE+OyrMycjAavjQMyNmhKIUt
  // Jv4CDYBxXjyjNAv7+Jv71RzbuzPgQ5tywG5RoQIDAQABMA0GCSqGSIb3DQEBCwUA
  // A4IBAQB7Iv6XCGcj2m3cAJbJYne/1a3h6i1hOtwDXpACngwiBppqziCaLRqQRN3z
  // 2UtRnK9tipyp95M6hKKExxc1/aSNwGQGws+MTzEnR13svnP19vgti4X39IrNOnQR
  // 3fIK1i3LUDVR3CjIO9ewr0S/U/msqcs0xJi7P2064x+WxJVJtCPKUtHnpwZiwmwN
  // gy3TC8igqh61ZMwrTUfr07r6D8Ay8UFCkB0dlZUX/R4hA+xzRCvXnaYBEabjjCHy
  // B+1NPulxeM7MaBavzx2m+yU5hX7cicPbyOxOIEVqwVZdx+QdqFL71LtkEW7eWEDy
  // NBZ4CY4ebsy0B9PkxUAfBApIndm2
  // -----END CERTIFICATE-----`,
  //   };
  const app = await NestFactory.create(AppModule, {
    // httpsOptions,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  // const app = await NestFactory.create(AppModule);
  // app.enableCors();

  // const config = new DocumentBuilder()
  //   .setTitle('Taskrr API')
  //   .setDescription('Aplicacion de gestion de tareas')
  //   .setVersion('1.0')
  //   .build();

  // const document =
  // SwaggerModule.createDocument(app
  //   , config
  //   );
  // SwaggerModule.setup('docs', app, document);
  const configService = app.get(ConfigService);
  app.enableCors();
  await app.listen(process.env.PORT);
  console.log(`http://localhost:${process.env.PORT}`);
  console.log(configService.get('PORT'));
}
bootstrap();
