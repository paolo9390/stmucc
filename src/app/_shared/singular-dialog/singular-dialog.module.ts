import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleModule } from '../../_shared/title/title.module';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SingularDialogComponent } from './singular-dialog.component';


@NgModule({
  declarations: [
    SingularDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TitleModule
  ],
  entryComponents: [SingularDialogComponent],
  exports: [
    SingularDialogComponent
  ]
})
export class SingularDialogModule { }
