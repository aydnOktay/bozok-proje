import { IsString, IsNotEmpty, IsOptional, IsEmail } from 'class-validator';


export class AuthSignInRequest {
    @IsString()
    fullName: string;

    @IsString()
    @IsNotEmpty()
    password: string;


    @IsString()
    @IsNotEmpty()
    department: string;

    @IsString()
    @IsNotEmpty()
    rpassword: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

}

export class AuthResetPassword {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}