import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { TitleModule } from '../_shared/title/title.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GoldCardComponent } from './gold-card.component';
import { GoldCardService } from '../_services/goldcard.service';
import { SignUpDialogComponent } from './signup-dialog/signup-dialog.component';
import { FormsModule } from '@angular/forms';
import { LoaderService } from '../_services/loader.service';
import { MatCardModule, MatIconModule, MatButtonModule, MatDialogModule, MatListModule, MatButtonToggleModule, MatExpansionModule } from '@angular/material';

@NgModule({
  declarations: [
    GoldCardComponent,
    TermsDialogComponent,
    SignUpDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatButtonToggleModule,
    MatExpansionModule,
    FormsModule,
    TitleModule
  ],
  entryComponents: [TermsDialogComponent, SignUpDialogComponent],
  providers: [GoldCardService, LoaderService],
  exports: [
    GoldCardComponent
  ]
})
export class GoldCardModule { }
