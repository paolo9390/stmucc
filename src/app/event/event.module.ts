import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { MatDialogModule, MatButtonModule, MatIconModule, MatExpansionModule, MatDividerModule, MatCardModule, MatListModule } from '@angular/material';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleModule } from '../_shared/title/title.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EventComponent, EventDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule,
    TitleModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    EventComponent,
    EventDialogComponent
  ],
  entryComponents: [
    EventDialogComponent
  ]
})
export class EventModule { }
