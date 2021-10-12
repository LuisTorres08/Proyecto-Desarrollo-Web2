import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { EmployeeStudiesModule } from './employee-studies/employee-studies.module';
import { WorkRecordsModule } from './work-records/work-records.module';
import { EmployeeCompetencesModule } from './employee-competences/employee-competences.module';
import { CompetencesModule } from './competences/competences.module';
import { CoolartlyTypeModule } from './coolartly-type/coolartly-type.module';
import { InstitutionsModule } from './institutions/institutions.module';
import { ProfessionsModule } from './professions/professions.module';
import { JobTitlesModule } from './job-titles/job-titles.module';

@Module({
  imports: [UsersModule, EmployeesModule, EmployeeStudiesModule, WorkRecordsModule, EmployeeCompetencesModule, CompetencesModule, CoolartlyTypeModule, InstitutionsModule, ProfessionsModule, JobTitlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
