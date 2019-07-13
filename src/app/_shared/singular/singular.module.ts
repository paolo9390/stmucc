import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingularComponent } from './singular.component';
import { TitleModule } from '../title/title.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [
    SingularComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    TitleModule
  ],
  exports: [
    SingularComponent
  ]
})
export class SingularModule { }
