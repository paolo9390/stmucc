import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { GoldCardComponent } from './gold-card/gold-card.component';
import { GetInvolvedComponent } from './support/getinvolved/getinvolved.component';
import { CorporateComponent } from './support/corporate/corporate.component';
import { WhatComponent } from './about/what/what.component';
import { WhyComponent } from './about/why/why.component';
import { WhoComponent } from './about/who/who.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { UKComponent } from './volunteer/uk/uk.component';
import { OverseasComponent } from './volunteer/overseas/overseas.component';
import { TestimonialComponent } from './volunteer/testimonial/testimonial.component';
import { TrusteesComponent } from './team/trustees/trustees.component';
import { StaffComponent } from './team/staff/staff.component';
import { AboutComponent } from './about/about.component';
import { DonationComponent } from './donation/donation.component';
import { ConnectComponent } from './connect/connect.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ReportComponent } from './about/report/report.component';
import { PartnerComponent } from './partner/partner.component';
import { ProjectComponent } from './project/project.component';
import { LegacyComponent } from './support/legacy/legacy.component';
import { CollectionBoxComponent } from './support/collectionbox/collectionbox.component';
import { PromiseComponent } from './support/promise/promise.component';
import { ThankyouComponent } from './_shared/thankyou/thankyou.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/:projectId', component: ProjectComponent},
  { path: 'partners', component: PartnerComponent },
  { path: 'connect', component: ConnectComponent},
  { path: 'support',
    children: [
      { path: '', component: SupportComponent },
      { path: 'donate', component: DonationComponent },
      { path: 'fundraising', component: GetInvolvedComponent },
      { path: 'legacies', component: LegacyComponent },
      { path: 'corporate', component: CorporateComponent },
      { path: 'gold-card', component: GoldCardComponent },
      { path: 'collection-box', component: CollectionBoxComponent },
      { path: 'fundraising-promise', component: PromiseComponent },
      { path: 'thank-you', component: ThankyouComponent }
    ]
  },
  { path: 'about',
    children: [
      { path: '', component: AboutComponent },
      { path: 'what-we-do', component: WhatComponent },
      { path: 'why-we-do-it', component: WhyComponent },
      { path: 'who-we-are', component: WhoComponent },
      { path: 'annual-reports', component: ReportComponent},
      { path: 'team',
      children: [
        { path: '', redirectTo: 'staff-and-volunteers', pathMatch: 'full' },
        { path: 'trustees', component: TrusteesComponent },
        { path: 'staff-and-volunteers', component: StaffComponent }
        ]
      }
    ]
  },
  { path: 'volunteer',
    children: [
      { path: '', component: VolunteerComponent },
      { path: 'uk', component: UKComponent },
      { path: 'overseas', component: OverseasComponent },
      { path: 'experiences', component: TestimonialComponent }
    ]
  }
//   { path: '**', component: NotfoundComponent }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
