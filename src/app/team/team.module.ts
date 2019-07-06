import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { TrusteesComponent } from './trustees/trustees.component';
import { StaffComponent } from './staff/staff.component';
import { TeamDialogComponent } from './team-dialog/team-dialog.component';
import { TitleModule } from '../_shared/title/title.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeamService } from '../_services/team.service';
import { LoaderService } from '../_services/loader.service';


@NgModule({
  declarations: [
    TeamComponent,
    TrusteesComponent,
    StaffComponent,
    TeamDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    TitleModule
  ],
  entryComponents: [TeamDialogComponent],
  providers: [TeamService, LoaderService],
  exports: [
    TeamComponent
  ]
})
export class TeamModule { }
