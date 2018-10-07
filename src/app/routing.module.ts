import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { GoldCardComponent } from './gold-card/gold-card.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent},
  { path: 'support', data: { breadcrumbs: "Support"},
    children: [
      { path: '', component: SupportComponent},
      { path: 'donation', component: GoldCardComponent},
    ]
  }
//   { path: '**', component: NotfoundComponent }
  
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
