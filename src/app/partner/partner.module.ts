import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { PartnerComponent } from './partner.component';
import { SingularDialogModule } from '../_shared/singular-dialog/singular-dialog.module';
import { TitleModule } from '../_shared/title/title.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PartnerService } from '../_services/partner.service';


@NgModule({
  declarations: [
    PartnerComponent,
    PartnerListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    SingularDialogModule,
    TitleModule
  ],
  providers: [PartnerService],
  exports: [
    PartnerComponent
  ]
})
export class PartnerModule { }
