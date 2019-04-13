import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { TrusteesComponent } from './trustees/trustees.component';
import { TrusteesDialogComponent } from './trustees/trustees-dialog/trustees-dialog.component';
import { TitleModule } from '../_shared/title/title.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    TeamComponent,
    TrusteesComponent,
    TrusteesDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    TitleModule
  ],
  entryComponents: [TrusteesDialogComponent],
  exports: [
    TeamComponent
  ]
})
export class TeamModule { }
