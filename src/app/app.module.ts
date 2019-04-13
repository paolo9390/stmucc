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
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { TitleComponent } from './shared/title/title.component';
import { BreadcrumbService } from './shared/breadcrumb/breadcrumb.service';
import { PartnerComponent } from './partner/partner.component';
import { PartnerListComponent } from './partner/partner-list/partner-list.component';
import { SupportComponent } from './support/support.component';
import { GetInvolvedComponent } from './support/getinvolved/getinvolved.component';
import { CorporateComponent } from './support/corporate/corporate.component';
import { DonationComponent } from './donation/donation.component';
import { GoldCardComponent } from './gold-card/gold-card.component';
import { ShopComponent } from './shop/shop.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { UKComponent } from './volunteer/uk/uk.component';
import { OverseasComponent } from './volunteer/overseas/overseas.component';
import { TestimonialComponent } from './volunteer/testimonial/testimonial.component';
import { AboutComponent } from './about/about.component';
import { SummaryComponent } from './about/summary/summary.component';
import { WhatComponent } from './about/what/what.component';
import { WhyComponent } from './about/why/why.component';
import { WhoComponent } from './about/who/who.component';
import { TeamComponent } from './team/team.component';
import { TrusteesComponent } from './team/trustees/trustees.component';
import { TrusteesDialogComponent } from './team/trustees/trustees-dialog/trustees-dialog.component';
import { SuccessComponent } from './gold-card/success/success.component';
import { DonationSignupComponent } from './donation/donation-signup/donation-signup.component';
import { ProjectListComponent } from './projects/project-list.component';
import { PanelService } from './services/panel.service';
import { TeamService } from './services/team.service';
import { PaypalService } from './services/paypal.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreadcrumbComponent,
    TitleComponent,
    PartnerComponent,
    PartnerListComponent,
    SupportComponent,
    GetInvolvedComponent,
    CorporateComponent,
    DonationComponent,
    DonationSignupComponent,
    ProjectListComponent,
    GoldCardComponent,
    AboutComponent,
    SummaryComponent,
    WhatComponent,
    WhyComponent,
    WhoComponent,
    ShopComponent,
    VolunteerComponent,
    UKComponent,
    OverseasComponent,
    TestimonialComponent,
    TeamComponent,
    TrusteesComponent,
    TrusteesDialogComponent,
    SuccessComponent
  ],
  imports: [
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
  entryComponents: [TrusteesDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
