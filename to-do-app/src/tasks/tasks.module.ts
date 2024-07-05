import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { DatabaseModule } from 'src/database/database.module';
import { tasksProviders } from './tasks.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [TasksService,...tasksProviders],
})
export class TasksModule {}
