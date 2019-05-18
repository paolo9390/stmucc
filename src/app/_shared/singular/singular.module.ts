import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingularComponent } from './singular.component';
import { TitleModule } from '../title/title.module';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SingularComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    TitleModule
  ],
  exports: [
    SingularComponent
  ]
})
export class SingularModule { }
