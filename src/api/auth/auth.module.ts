import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models';
import { JwtModule } from 'src/services/jwt/jwt.module';

@Module({
  imports:[TypeOrmModule.forFeature([User]),UserModule,JwtModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
