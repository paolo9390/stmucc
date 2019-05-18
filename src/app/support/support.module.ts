import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { CorporateComponent } from './corporate/corporate.component';
import { GetInvolvedComponent } from './getinvolved/getinvolved.component';
import { TitleModule } from '../_shared/title/title.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SupportService } from '../_services/support.service';


@NgModule({
  declarations: [
    SupportComponent,
    CorporateComponent,
    GetInvolvedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    TitleModule
  ],
  providers: [SupportService],
  exports: [
    SupportComponent
  ]
})
export class SupportModule { }
