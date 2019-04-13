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
import { PartnerComponent } from './partner/partner.component';
import { PartnerListComponent } from './partner/partner-list/partner-list.component';
import { SupportModule } from './support/support.module';
import { DonationModule } from './donation/donation.module';
import { GoldCardComponent } from './gold-card/gold-card.component';
import { ShopComponent } from './shop/shop.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { UKComponent } from './volunteer/uk/uk.component';
import { OverseasComponent } from './volunteer/overseas/overseas.component';
import { TestimonialComponent } from './volunteer/testimonial/testimonial.component';
import { AboutModule } from './about/about.module';
import { TeamModule } from './team/team.module';
import { SuccessComponent } from './gold-card/success/success.component';
import { ProjectModule } from './projects/project.module';
import { PanelService } from './_services/panel.service';
import { TeamService } from './_services/team.service';
import { PaypalService } from './_services/paypal.service';
import { TitleModule } from './_shared/title/title.module';


@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    PartnerComponent,
    PartnerListComponent,
    GoldCardComponent,
    ShopComponent,
    VolunteerComponent,
    UKComponent,
    OverseasComponent,
    TestimonialComponent,
    SuccessComponent
  ],
  imports: [
    AboutModule,
    DonationModule,
    SupportModule,
    TeamModule,
    HomeModule,
    ProjectModule,
    TitleModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpModule,
    JsonpModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [BreadcrumbService, PanelService, TeamService, PaypalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
