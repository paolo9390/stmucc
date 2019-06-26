import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing.module';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BreadcrumbComponent } from './_shared/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from './_shared/breadcrumb/breadcrumb.service';
import { PartnerModule } from './partner/partner.module';
import { SupportModule } from './support/support.module';
import { DonationModule } from './donation/donation.module';
import { GoldCardModule } from './gold-card/gold-card.module';
import { ShopComponent } from './shop/shop.component';
import { VolunteerModule } from './volunteer/volunteer.module';
import { AboutModule } from './about/about.module';
import { ConnectModule } from './connect/connect.module';
import { TeamModule } from './team/team.module';
import { ProjectModule } from './project/project.module';
import { PaypalService } from './_services/paypal.service';
import { AppService } from './_services/app.service';
import { TitleModule } from './_shared/title/title.module';
import { SingularModule } from './_shared/singular/singular.module';


@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    ShopComponent
  ],
  imports: [
    AboutModule,
    DonationModule,
    ConnectModule,
    PartnerModule,
    SupportModule,
    TeamModule,
    HomeModule,
    ProjectModule,
    GoldCardModule,
    SingularModule,
    TitleModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpModule,
    JsonpModule,
    VolunteerModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [BreadcrumbService, PaypalService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
