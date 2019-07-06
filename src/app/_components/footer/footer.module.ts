import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppService } from 'src/app/_services/app.service';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    FooterComponent
  ],
  providers: [
    AppService
  ]
})
export class FooterModule { }
