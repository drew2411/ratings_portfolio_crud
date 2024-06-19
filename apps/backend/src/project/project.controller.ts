import { Controller, Get, Post, Put, Delete, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from '../project/dto/create-project.dto';
import { UpdateProjectDto } from '../project/dto/update-project.dto';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) projectID: string) {
    return this.projectService.findOne(projectID);
  }

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) projectID: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    return this.projectService.update(projectID, updateProjectDto);
  }

  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) projectID: string) {
    await this.projectService.delete(projectID);
    return { success: true };
  }
}