import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CredsService } from 'src/services/creds/creds.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from 'src/models';
import { CredsModule } from 'src/services/creds/creds.module';
import { MailModule } from 'src/mail/mail.module';
import { JwtModule } from 'src/services/jwt/jwt.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    CredsModule,
    MailModule,
    JwtModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
