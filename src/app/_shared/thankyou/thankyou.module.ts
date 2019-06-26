import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankyouComponent } from './thankyou.component';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RoutingModule } from 'src/app/routing.module';


@NgModule({
  declarations: [
    ThankyouComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule
  ],
  exports: [
    ThankyouComponent
  ]
})
export class ThankyouModule { }
