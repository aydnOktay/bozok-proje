import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthResetPassword, AuthSignInRequest, AuthSignInResponse, AuthSignUpRequest } from './dto';
import { AuthService } from './auth.service';
import { Response } from 'express';


@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post("signup")
    async signup(@Body() dto: AuthSignUpRequest): Promise<AuthSignInResponse> {
        return await this.authService.signup(dto)
    }

    @Post("signin")
    async signin(@Body() dto: AuthSignInRequest, @Res() res: Response): Promise<any> {
        return await this.authService.signin(dto, res);
    }

    @Get('confirm/:token')
    async confirm(@Param('token') token: string): Promise<any> {
        return await this.authService.userEmailConfirm(token);
    }

    @Post("reset-password")
    async forgetPassword(@Body() dto: AuthResetPassword) {
        return await this.authService.forgetPassword(dto);
    }

    @Get("passwordConfirm/:token")
    async resetPassword(@Body() dto, @Param() token: string): Promise<any> {

    }


}
