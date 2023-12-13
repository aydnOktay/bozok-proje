import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';


@Controller('')
export class AppController {

    @Get("/")
    async homePage(@Res() res: Response) {
        res.render("login")
    }

    @Get("/anasayfa")
    async viewHomepage(@Res() res: Response) {
        res.render("index")
    }

    @Get("/createproject")
    async createProject(@Res() res: Response) {
        res.render("createproject")
    }

    @Get("/myprojects")
    async myProjects(@Res() res: Response) {
        res.render("myprojects")
    }


    @Get("/profil")
    async profile(@Res() res: Response) {
        res.render("profile")
    }

    @Get("/projectDetail")
    async projectDetail(@Res() res: Response) {
        res.render("projectDetail")
    }

    @Get("/login")
    async login(@Res() res: Response) {
        res.render("login")
    }

    @Get("/register")
    async register(@Res() res: Response) {
        res.render("register")
    }

    @Get("/forgetpassword")
    async forgetpassword(@Res() res: Response) {
        res.render("forgetpassword")
    }
}
