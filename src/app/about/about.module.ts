import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SummaryComponent } from './summary/summary.component';
import { WhatComponent } from './what/what.component';
import { WhoComponent } from './who/who.component';
import { WhyComponent } from './why/why.component';
import { TitleModule } from '../_shared/title/title.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutService } from '../_services/about.service';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    AboutComponent,
    SummaryComponent,
    WhatComponent,
    WhoComponent,
    WhyComponent,
    ReportComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    TitleModule
  ],
  providers: [AboutService],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
