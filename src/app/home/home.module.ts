import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PanelService } from '../_services/panel.service';
import { ProjectService } from '../_services/project.service';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [PanelService, ProjectService],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
