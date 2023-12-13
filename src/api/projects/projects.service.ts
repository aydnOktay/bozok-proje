import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Projects } from 'src/models';
import { Repository } from 'typeorm';
import { ProjectsRequestsDto } from './dto/requests.dto';


@Injectable()
export class ProjectsService {

    constructor(
        @InjectRepository(Projects) private projectsModel: Repository<Projects>,
    ) { }

    async createProject(dto: ProjectsRequestsDto) {
        const { project_title, project_purpose, project_description, project_users,project_admin } = dto;
        return await this.projectsModel.create({
            project_title,
            project_purpose,
            project_description
        });
    }
}
