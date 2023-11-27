import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('')
export class AppController {

    @Get("/")
    async homePage(@Res() res: Response) {
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

    @Get("/members")
    async members(@Res() res: Response) {
        res.render("members")
    }

    @Get("/profil")
    async profile(@Res() res: Response) {
        res.render("profile")
    }
    
    @Get("/projectDetail")
    async projectDetail(@Res() res: Response) {
        res.render("projectDetail")
    }
}
