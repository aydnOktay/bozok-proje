import { IsString, IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export class AuthSignInResponse {
    @IsString()
    fullName: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

}