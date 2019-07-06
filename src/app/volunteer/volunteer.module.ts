import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerComponent } from './volunteer.component';
import { OverseasComponent } from './overseas/overseas.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UKComponent } from './uk/uk.component';
import { TitleModule } from '../_shared/title/title.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VolunteerService } from '../_services/volunteer.service';
import { LoaderService } from '../_services/loader.service';


@NgModule({
  declarations: [
    VolunteerComponent,
    TestimonialComponent,
    OverseasComponent,
    UKComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    TitleModule
  ],
  providers: [VolunteerService, LoaderService],
  exports: [
    VolunteerComponent
  ]
})
export class VolunteerModule { }
