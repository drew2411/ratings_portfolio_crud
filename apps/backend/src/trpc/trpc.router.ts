import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { ProjectService } from '../project/project.service';
import { ProjectApplicationService } from '../project-application/project-application.service';
import { ProjectSelectionService } from '../project-selection/project-selection.service';
import { CreateProjectDto } from '../project/dto/create-project.dto';
import { UpdateProjectDto } from '../project/dto/update-project.dto';
import { CreateProjectApplicationDto } from '../project-application/dto/create-project-application.dto';
import { UpdateProjectApplicationDto } from '../project-application/dto/update-project-application.dto';
import { CreateProjectSelectionDto } from '../project-selection/dto/create-project-selection.dto';
import { UpdateProjectSelectionDto } from '../project-selection/dto/update-project-selection.dto';
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly projectService: ProjectService,
    private readonly projectApplicationService: ProjectApplicationService,
    private readonly projectSelectionService: ProjectSelectionService,
  ) {}

  appRouter = this.trpc.router({
    hello: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(({ input }) => {
        return `Hello ${input.name ? input.name : `Bilbo`}`;
      }),

    // Project Endpoints
    createProject: this.trpc.procedure
      .input(z.any())
      .mutation(async ({ input }) => {
        const dto = plainToClass(CreateProjectDto, input);
        await validateOrReject(dto);
        return this.projectService.create(dto);
      }),

    getProject: this.trpc.procedure
      .input(z.object({ projectID: z.string() }))
      .query(async ({ input }) => {
        return this.projectService.findOne(input.projectID);
      }),

    updateProject: this.trpc.procedure
      .input(z.any())
      .mutation(async ({ input }) => {
        const { projectID, ...rest } = input;
        const dto = plainToClass(UpdateProjectDto, rest);
        await validateOrReject(dto);
        return this.projectService.update(projectID, dto);
      }),

    deleteProject: this.trpc.procedure
      .input(z.object({ projectID: z.string() }))
      .mutation(async ({ input }) => {
        await this.projectService.delete(input.projectID);
        return { success: true };
      }),

    listProjects: this.trpc.procedure.query(async () => {
      return this.projectService.findAll();
    }),

    // ProjectApplication Endpoints
    createProjectApplication: this.trpc.procedure
      .input(z.any())
      .mutation(async ({ input }) => {
        const dto = plainToClass(CreateProjectApplicationDto, input);
        await validateOrReject(dto);
        return this.projectApplicationService.create(dto);
      }),

    getProjectApplication: this.trpc.procedure
      .input(z.object({ projectApplicationID: z.string() }))
      .query(async ({ input }) => {
        return this.projectApplicationService.findOne(input.projectApplicationID);
      }),

    updateProjectApplication: this.trpc.procedure
      .input(z.any())
      .mutation(async ({ input }) => {
        const { projectApplicationID, ...rest } = input;
        const dto = plainToClass(UpdateProjectApplicationDto, rest);
        await validateOrReject(dto);
        return this.projectApplicationService.update(projectApplicationID, dto);
      }),

    deleteProjectApplication: this.trpc.procedure
      .input(z.object({ projectApplicationID: z.string() }))
      .mutation(async ({ input }) => {
        await this.projectApplicationService.delete(input.projectApplicationID);
        return { success: true };
      }),

    listProjectApplications: this.trpc.procedure.query(async () => {
      return this.projectApplicationService.findAll();
    }),

    // ProjectSelection Endpoints
    createProjectSelection: this.trpc.procedure
      .input(z.any())
      .mutation(async ({ input }) => {
        const dto = plainToClass(CreateProjectSelectionDto, input);
        await validateOrReject(dto);
        return this.projectSelectionService.create(dto);
      }),

    getProjectSelection: this.trpc.procedure
      .input(z.object({ projectSelectionID: z.string() }))
      .query(async ({ input }) => {
        return this.projectSelectionService.findOne(input.projectSelectionID);
      }),

    updateProjectSelection: this.trpc.procedure
      .input(z.any())
      .mutation(async ({ input }) => {
        const { projectSelectionID, ...rest } = input;
        const dto = plainToClass(UpdateProjectSelectionDto, rest);
        await validateOrReject(dto);
        return this.projectSelectionService.update(projectSelectionID, dto);
      }),

    deleteProjectSelection: this.trpc.procedure
      .input(z.object({ projectSelectionID: z.string() }))
      .mutation(async ({ input }) => {
        await this.projectSelectionService.delete(input.projectSelectionID);
        return { success: true };
      }),

    listProjectSelections: this.trpc.procedure.query(async () => {
      return this.projectSelectionService.findAll();
    }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
