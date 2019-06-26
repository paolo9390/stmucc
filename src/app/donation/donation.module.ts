import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationComponent } from './donation.component';
import { DonationSignupComponent } from './donation-signup/donation-signup.component';
import { TitleModule } from '../_shared/title/title.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonationService } from '../_services/donation.service';
import { ThankyouModule } from '../_shared/thankyou/thankyou.module';


@NgModule({
  declarations: [
    DonationComponent,
    DonationSignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    TitleModule,
    ThankyouModule
  ],
  providers: [DonationService],
  exports: [
    DonationComponent
  ]
})
export class DonationModule { }
