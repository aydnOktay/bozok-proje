import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthResetPassword, AuthSignInRequest, AuthSignInResponse } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post("signup")
    async signup(@Body() dto: AuthSignInRequest): Promise<AuthSignInResponse> {
        return await this.authService.signup(dto)
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
    async resetPassword(@Body() dto ,@Param() token:string):Promise<any>{

    }


}
