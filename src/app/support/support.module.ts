import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { CorporateComponent } from './corporate/corporate.component';
import { GetInvolvedComponent } from './getinvolved/getinvolved.component';
import { TitleModule } from '../_shared/title/title.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SupportService } from '../_services/support.service';
import { LegacyComponent } from './legacy/legacy.component';
import { CollectionBoxComponent } from './collectionbox/collectionbox.component';
import { PromiseComponent } from './promise/promise.component';
import { LoaderService } from '../_services/loader.service';
import { MatCardModule, MatIconModule, MatDividerModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { SupporterComponent } from './supporter/supporter.component';


@NgModule({
  declarations: [
    SupportComponent,
    CorporateComponent,
    GetInvolvedComponent,
    LegacyComponent,
    CollectionBoxComponent,
    PromiseComponent,
    SupporterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    TitleModule,
    RouterModule
  ],
  providers: [SupportService, LoaderService],
  exports: [
    SupportComponent
  ]
})
export class SupportModule { }
