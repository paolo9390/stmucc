import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { TitleModule } from '../_shared/title/title.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GoldCardComponent } from './gold-card.component';
import { GoldCardService } from '../_services/goldcard.service';


@NgModule({
  declarations: [
    GoldCardComponent,
    TermsDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    TitleModule
  ],
  entryComponents: [TermsDialogComponent],
  providers: [GoldCardService],
  exports: [
    GoldCardComponent
  ]
})
export class GoldCardModule { }
