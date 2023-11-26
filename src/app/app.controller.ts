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
}
