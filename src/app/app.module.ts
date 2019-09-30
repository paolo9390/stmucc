import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterModule } from './_components/footer/footer.module';
import { HeaderModule } from './_components/header/header.module';
import { LoaderModule } from './_components/loader/loader.module';
import { HomeModule } from './home/home.module';
import { BreadcrumbModule } from './_shared/breadcrumb/breadcrumb.module';
import { PartnerModule } from './partner/partner.module';
import { SupportModule } from './support/support.module';
import { DonationModule } from './donation/donation.module';
import { GoldCardModule } from './gold-card/gold-card.module';
import { VolunteerModule } from './volunteer/volunteer.module';
import { AboutModule } from './about/about.module';
import { ConnectModule } from './connect/connect.module';
import { TeamModule } from './team/team.module';
import { ProjectModule } from './project/project.module';
import { PaypalService } from './_services/paypal.service';
import { TitleModule } from './_shared/title/title.module';
import { SingularModule } from './_shared/singular/singular.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,
    FooterModule,
    LoaderModule,
    BreadcrumbModule,
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
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    RoutingModule,
    VolunteerModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PaypalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
