import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { GoldCardComponent } from './gold-card/gold-card.component';
import { ShopComponent } from './shop/shop.component';
import { DonationComponent } from './donation/donation.component';
import { SummaryComponent } from './about/summary/summary.component';
import { WhatComponent } from './about/what/what.component';
import { WhyComponent } from './about/why/why.component';
import { WhoComponent } from './about/who/who.component';
import { SuccessComponent } from './gold-card/success/success.component';
import { TeamComponent } from './team/team.component';
import { TrusteesComponent } from './team/trustees/trustees.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'support', data: { breadcrumbs: "Support" },
    children: [
      { path: '', component: SupportComponent },
      { path: 'donations', component: DonationComponent },
      { path: 'gold-card', component: GoldCardComponent },
      { path: 'success', component: SuccessComponent },
    ]
  },
  { path: 'about',
    children: [
      { path: '', component: AboutComponent },
      { path: 'transforming', component: SummaryComponent },
      { path: 'what-we-do', component: WhatComponent },
      { path: 'why-we-do-it', component: WhyComponent },
      { path: 'who-we-are', component: WhoComponent },
      { path: 'team', 
      children: [
        { path: '', component: TeamComponent },
        { path: 'trustees', component: TrusteesComponent }
        ]
      }
    ]
  }
//   { path: '**', component: NotfoundComponent }
  
];


@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
