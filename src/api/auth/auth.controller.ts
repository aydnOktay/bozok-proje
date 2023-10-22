import { Controller ,Get,Post,Body,Param} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthSignInRequest, AuthSignInResponse } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService:AuthService
    ){}

    @Post("signin")
    async sigin(@Body() dto:AuthSignInRequest):Promise<AuthSignInResponse>{
        return await this.authService.signin(dto)
    }

    @Get('confirm/:token')
    async confirm(@Param('token') token: string): Promise<any> {
      return await this.authService.userEmailConfirm(token);
    }
    @Post("signup")
    async sigup(){}


}
