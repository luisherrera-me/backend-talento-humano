import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerAuthDto } from './dto/register-auth.dto';
import { loginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('register') // http://localhost/auth/register -> POST
    register(@Body() user: registerAuthDto){
        return this.authService.register(user);
    }

    @Post('login') // http://localhost/auth/login -> POST
    login(@Body() loginDto: loginAuthDto){
        return this.authService.login(loginDto);
    }
}

