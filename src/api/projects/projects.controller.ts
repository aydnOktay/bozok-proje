import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ProjectsRequestsDto } from './dto/requests.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    
    constructor(
        private projectsService : ProjectsService
    ){}

    @Get("")
    async get(){
        return true;
    }
    
    @Post("/")
    async createProject(
        @Body() dto
    ) {
        console.log(dto);
        return await this.projectsService.createProject(dto) }

}
