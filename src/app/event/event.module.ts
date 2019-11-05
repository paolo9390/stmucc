import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { MatDialogModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatExpansionModule, MatDividerModule, MatCardModule, MatListModule, MatSelectModule } from '@angular/material';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleModule } from '../_shared/title/title.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventComponent, EventDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule,
    TitleModule,
    MatListModule,
    MatInputModule,
    FormsModule,
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
