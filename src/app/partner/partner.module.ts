import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partner.component';
import { SingularDialogModule } from '../_shared/singular-dialog/singular-dialog.module';
import { TitleModule } from '../_shared/title/title.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PartnerService } from '../_services/partner.service';
import { LoaderService } from '../_services/loader.service';
import { MatCardModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [
    PartnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    SingularDialogModule,
    TitleModule
  ],
  providers: [PartnerService, LoaderService],
  exports: [
    PartnerComponent
  ]
})
export class PartnerModule { }
