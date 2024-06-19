import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProjectApplicationService } from './project-application.service';
import { CreateProjectApplicationDto } from './dto/create-project-application.dto';
import { UpdateProjectApplicationDto } from './dto/update-project-application.dto';
import { ProjectApplications } from '@prisma/client';

@Controller('project-applications')
export class ProjectApplicationController {
  constructor(private readonly projectApplicationService: ProjectApplicationService) {}

  @Get()
  findAll(): Promise<ProjectApplications[]> {
    return this.projectApplicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProjectApplications | null> {
    return this.projectApplicationService.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreateProjectApplicationDto): Promise<ProjectApplications> {
    return this.projectApplicationService.create(createDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateProjectApplicationDto,
  ): Promise<ProjectApplications> {
    return this.projectApplicationService.update(id, updateDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.projectApplicationService.delete(id);
  }
}
