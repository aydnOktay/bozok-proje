import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthResetPassword, AuthSignInRequest, AuthSignInResponse } from './dto';
import { ApiEc, ApiException } from 'src/exceptions';
import { JwtService } from 'src/services/jwt/jwt.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models';
import { Repository } from 'typeorm';
import { MailService } from 'src/mail/mail.service';
import { CredsService } from 'src/services/creds/creds.service';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private userModel: Repository<User>,
        private userService: UserService,
        private jwtService: JwtService,
        private mailService: MailService,
        private credsService: CredsService,

    ) { }

    async signup(dto: AuthSignInRequest): Promise<AuthSignInResponse> {
        return await this.userService.createUserByEmail(dto);
    }

    async userEmailConfirm(token: string): Promise<any> {

        const { email, id } = await this.jwtService.verifyJwt(token)

        if (!(await this.userService.getUserByEmail(email))) {
            throw new ApiException(ApiEc.UserNotFound);
        }

        const user = await this.userModel.findOneBy({ id });

        await this.userModel.update({ id: user.id }, {
            active: true,
        });

        return {
            message: 'Email confirmed',
        };
    }

    async forgetPassword(dto: AuthResetPassword): Promise<any> {
        const { email } = dto;
        const user = await this.userService.getUserByEmail(email);
        if (!user) {
            throw new ApiException(ApiEc.UserNotFound)
        }

        const resetpasswordToken = await this.jwtService.createResetPasswordJWT(email);
        await this.mailService.sendUserConfirmation(user, resetpasswordToken, "resetpassword");
        return {
            message: "Email send"
        }


    }

    async resetPassword(dto,token):Promise<any>{
        const {email} = await this.jwtService.verifyResetPasswordJWT(token);
        const user = await this.userService.getUserByEmail(email);
        if (!user) {
            throw new ApiException(ApiEc.UserNotFound);
        }

        const hashedPassword = await this.credsService.passwordhash(user.password);
        await this.userService
    }   


}
