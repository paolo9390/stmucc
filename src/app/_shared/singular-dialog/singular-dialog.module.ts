import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleModule } from '../../_shared/title/title.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SingularDialogComponent } from './singular-dialog.component';
import { MatDialogModule, MatButtonModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [
    SingularDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    TitleModule
  ],
  entryComponents: [SingularDialogComponent],
  exports: [
    SingularDialogComponent
  ]
})
export class SingularDialogModule { }
