import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { CorporateComponent } from './corporate/corporate.component';
import { GetInvolvedComponent } from './getinvolved/getinvolved.component';
import { TitleModule } from '../_shared/title/title.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SupportService } from '../_services/support.service';
import { LegacyComponent } from './legacy/legacy.component';
import { CollectionBoxComponent } from './collectionbox/collectionbox.component';
import { PromiseComponent } from './promise/promise.component';
import { LoaderService } from '../_services/loader.service';


@NgModule({
  declarations: [
    SupportComponent,
    CorporateComponent,
    GetInvolvedComponent,
    LegacyComponent,
    CollectionBoxComponent,
    PromiseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    TitleModule
  ],
  providers: [SupportService, LoaderService],
  exports: [
    SupportComponent
  ]
})
export class SupportModule { }
