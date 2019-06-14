import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { TitleModule } from '../_shared/title/title.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GoldCardComponent } from './gold-card.component';
import { GoldCardService } from '../_services/goldcard.service';
import { SignUpDialogComponent } from './signup-dialog/signup-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GoldCardComponent,
    TermsDialogComponent,
    SignUpDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    TitleModule
  ],
  entryComponents: [TermsDialogComponent, SignUpDialogComponent],
  providers: [GoldCardService],
  exports: [
    GoldCardComponent
  ]
})
export class GoldCardModule { }
