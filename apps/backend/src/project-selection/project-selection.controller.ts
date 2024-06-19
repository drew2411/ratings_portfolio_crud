import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ProjectSelectionService } from './project-selection.service';
import { CreateProjectSelectionDto } from './dto/create-project-selection.dto';
import { UpdateProjectSelectionDto } from './dto/update-project-selection.dto';
import { ProjectSelections } from '@prisma/client';

@Controller('project-selections')
export class ProjectSelectionController {
  constructor(private readonly projectSelectionService: ProjectSelectionService) {}

  @Get()
  async findAll(): Promise<ProjectSelections[]> {
    return this.projectSelectionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProjectSelections | null> {
    return this.projectSelectionService.findOne(id);
  }

  @Post()
  async create(@Body(ValidationPipe) createProjectSelectionDto: CreateProjectSelectionDto): Promise<ProjectSelections> {
    return this.projectSelectionService.create(createProjectSelectionDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateProjectSelectionDto: UpdateProjectSelectionDto,
  ): Promise<ProjectSelections> {
    return this.projectSelectionService.update(id, updateProjectSelectionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.projectSelectionService.delete(id);
  }
}