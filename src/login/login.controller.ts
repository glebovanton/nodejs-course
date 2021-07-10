import { Response } from 'express';
import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async create(@Res() res: Response, @Body() createLoginDto: LoginDto) {
    const { login, password } = createLoginDto;
    const token = await this.loginService.signToken(login, password);
    return !token
      ? res.status(HttpStatus.FORBIDDEN).send('Incorrect login or password')
      : res.status(HttpStatus.OK).json({
          token,
        });
  }
}
