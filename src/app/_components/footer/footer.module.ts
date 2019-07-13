import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppService } from '../../_services/app.service';
import { MatListModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    FooterComponent
  ],
  providers: [
    AppService
  ]
})
export class FooterModule { }
