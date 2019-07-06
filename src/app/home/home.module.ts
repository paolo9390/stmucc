import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppService } from '../_services/app.service';
import { ProjectService } from '../_services/project.service';
import { LoaderService } from '../_services/loader.service';


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
  providers: [AppService, ProjectService, LoaderService],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
