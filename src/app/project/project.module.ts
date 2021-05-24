import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project.component';
import { SingularDialogModule } from '../_shared/singular-dialog/singular-dialog.module';
import { TitleModule } from '../_shared/title/title.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectService } from '../_services/project.service';
import { LoaderService } from '../_services/loader.service';
import { MatButtonModule, MatCardModule } from '@angular/material';


@NgModule({
  declarations: [
    ProjectComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    SingularDialogModule,
    TitleModule
  ],
  providers: [ProjectService, LoaderService],
  exports: [
    ProjectComponent
  ]
})
export class ProjectModule { }
