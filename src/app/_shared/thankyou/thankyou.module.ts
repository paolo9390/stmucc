import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankyouComponent } from './thankyou.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RoutingModule } from '../../routing.module';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [
    ThankyouComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RoutingModule
  ],
  exports: [
    ThankyouComponent
  ]
})
export class ThankyouModule { }
