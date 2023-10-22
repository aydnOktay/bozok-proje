import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/models';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) { }

  async sendUserConfirmation(user: User, token: string): Promise<void> {
    const url = `${process.env.BASE_URL}/auth/confirm/${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Bozok Üniversitesi Proje Takip Sistemine Hoş Geldiniz ! Email Adresinizi Doğrulayınız',
      text: url,
      html:`Merhaba <b style="color:red"> ${user.fullName} </b> Lütfen <a href="${url}"> BURAYA TIKLAYARAK </a> mail adresinizi dogrulayın`
    });
  }

  // async sendUserForgotPassword(user: User, token: string): Promise<void> {
  //   const url = `${process.env.CLIENT_URL}/auth/reset-password?token=${token}`;
  //   await this.mailerService.sendMail({
  //     to: user.email,
  //     subject: 'Reset Password',
  //     template: './forgot-password',
  //     context: {
  //       name: user.fullName,
  //       url,
  //     },
  //   });
  // }
}
