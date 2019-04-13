import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { TitleModule } from '../_shared/title/title.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

// add single project component to show it per page

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    TitleModule
  ],
  entryComponents: [ProjectDialogComponent],
  exports: [
    ProjectListComponent
  ]
})
export class ProjectModule { }
