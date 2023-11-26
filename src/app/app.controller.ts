import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('')
export class AppController {

    @Get("/")
    async homePage(@Res() res: Response) {
        res.render("index")
    }
}
