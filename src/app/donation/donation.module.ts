import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationComponent } from './donation.component';
import { TitleModule } from '../_shared/title/title.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonationService } from '../_services/donation.service';
import { ThankyouModule } from '../_shared/thankyou/thankyou.module';
import { LoaderService } from '../_services/loader.service';
import { MatCardModule, MatIconModule, MatDividerModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    DonationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    TitleModule,
    ThankyouModule
  ],
  providers: [DonationService, LoaderService],
  exports: [
    DonationComponent
  ]
})
export class DonationModule { }
