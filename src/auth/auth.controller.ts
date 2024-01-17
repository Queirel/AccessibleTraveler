import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CreateUserCognitoDto } from 'src/users/dto/create-user-cognito.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    const user = { email: signInDto.username, password: signInDto.password };
    return this.authService.authenticateUser(user);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @ApiParam({
    name: ' ',
  })
  @ApiTags('Users')
  @Post()
  public async registerUser(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto,
  ) {
    const { email, password } = createUserDto;
    const cognitoData = { email, password };
    const cognito = await this.usersService.createUserCognito(cognitoData);
    const user = await this.usersService.createUser(createUserDto);
    return { cognito, user };
  }

  @Post('login')
  public async authenticateUser(
    @Body(new ValidationPipe()) createUserDto: CreateUserCognitoDto,
  ) {
    const { email, password } = createUserDto;
    const cognitoData = { email, password };
    return await this.usersService.authenticateUser(cognitoData);
  }
}
