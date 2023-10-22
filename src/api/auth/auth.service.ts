import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthSignInRequest, AuthSignInResponse } from './dto';
import { ApiEc, ApiException } from 'src/exceptions';
import { JwtService } from 'src/services/jwt/jwt.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private userModel: Repository<User>,
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async signin(dto: AuthSignInRequest): Promise<AuthSignInResponse> {
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

}
