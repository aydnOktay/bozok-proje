
import { IsString, IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export class ProjectsRequestsDto {

    @IsString()
    @IsNotEmpty()
    project_title: string;

    @IsString()
    @IsNotEmpty()
    project_purpose: string;

    @IsString()
    @IsNotEmpty()
    project_description: string;

    @IsString()
    @IsNotEmpty()
    project_users: string;

    @IsString()
    project_admin:string;


}