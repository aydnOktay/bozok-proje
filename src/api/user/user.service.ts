import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusType } from 'src/common';
import { ApiEc, ApiException } from 'src/exceptions';
import { User } from 'src/models';
import { CredsService } from 'src/services/creds/creds.service';
import { Repository } from 'typeorm';
import { AuthSignInRequest, AuthSignInResponse } from '../auth/dto';
import { MailService } from 'src/mail/mail.service';
import { JwtService } from 'src/services/jwt/jwt.service';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userModel: Repository<User>,
        private credsService: CredsService,
        private mailService: MailService,
        private jwtService: JwtService,

    ) { }

    async getUserByEmail(email: string): Promise<any> {
        return await this.userModel.findOneBy({ email });
    }

    async createUserByEmail(dto: AuthSignInRequest): Promise<AuthSignInResponse> {
        const { fullName, email, password, rpassword, department } = dto;

        if (await this.getUserByEmail(email)) {
            throw new ApiException(ApiEc.EmailAlreadyRegistered)
        }

        if (!(password == rpassword)) {
            throw new ApiException(ApiEc.PasswordNotMatch);
        }

        const newUser = await this.userModel.create({
            fullName: fullName,
            email: email,
            password: await this.credsService.passwordhash(password),
            department: department,
            active: false
        });


        const token = await this.jwtService.createJWT(newUser.email, newUser.id);
        await this.mailService.sendUserConfirmation(newUser, token, "signup");
        return await this.userModel.save(newUser);

    }

    async updateUserById(id,data):Promise<any>{
        
    }


}
