import {Module} from '@nestjs/common'
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';
import { ProjectModule } from 'apps/backend/src/project/project.module';
import { ProjectApplicationModule } from 'apps/backend/src/project-application/project-application.module';
import { ProjectSelectionModule } from 'apps/backend/src/project-selection/project-selection.module';

@Module({
    imports: [TrpcModule,ProjectModule,ProjectApplicationModule,ProjectSelectionModule],
    providers: [TrpcService, TrpcRouter],
    exports: [TrpcRouter,TrpcService],
})
export class TrpcModule {}
