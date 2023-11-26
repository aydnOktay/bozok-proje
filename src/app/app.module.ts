import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from 'src/api/auth/auth.module';
import { UserModule } from 'src/api/user/user.module';
import { Projects, User } from 'src/models';
import { CredsModule } from 'src/services/creds/creds.module';
import { JwtModule } from 'src/services/jwt/jwt.module';
import * as dotenv from 'dotenv';
import { MailModule } from 'src/mail/mail.module';
import { AppController } from './app.controller';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Projects],
      synchronize: true
    }),
    AuthModule, UserModule, CredsModule,MailModule,JwtModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
