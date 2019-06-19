import { Component, OnInit, OnDestroy } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { BreadcrumbService } from './_shared/breadcrumb/breadcrumb.service';
import { Router, NavigationEnd } from '@angular/router';
import { Footer } from './_models/footer.model';
import { AppService } from './_services/app.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  routerSubscription: Subscription;

  title = 'stmucc';
  logo: string = '/assets/img/stmucc.png';
  fundraisingLogo: string = '/assets/img/fundraising-regulator.png';
  frlogo: string = '/assets/img/fr.png';
  logowhite: string = '/assets/img/stmuccwhite.png';;
  banner = {
    slogan: "Give health, give life, give hope"
  };
  footerDetails: Footer[];

  constructor (
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry,
    private breadcrumbService: BreadcrumbService,
    private appService: AppService,
    public router: Router
    ){
  }

  ngOnInit() {
    this.appService.getFooterLocally().subscribe(footerDetails => {
      this.footerDetails = footerDetails;
    });

    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(
        () => window.scrollTo(0, 0)
      );

    this.iconRegistry.addSvgIconInNamespace('img', 'twitter',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/twitter.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'facebook',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/facebook.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'instagram',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/instagram.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'linkedin',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/linkedin.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'youtube',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/youtube.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'twitter-color',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/twitter-color.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'facebook-color',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/facebook-color.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'instagram-color',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/instagram-color.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'linkedin-color',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/linkedin-color.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'youtube-color',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/youtube-color.svg'));

    this.addBreadcrumbFriendlyNames();
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  addBreadcrumbFriendlyNames(){
    this.breadcrumbService.hideRoute('/home');
    this.breadcrumbService.addFriendlyNameForRoute('/about/what-we-do', 'What We Do');
    this.breadcrumbService.addFriendlyNameForRoute('/about/why-we-do-it', 'Why We Do It');
    this.breadcrumbService.addFriendlyNameForRoute('/about/who-we-are', 'Who We Are');
    this.breadcrumbService.addFriendlyNameForRoute('/about/annual-reports', 'Annual Reports');
    this.breadcrumbService.addFriendlyNameForRoute('/about/transforming', 'Transforming Lives');
    this.breadcrumbService.addFriendlyNameForRoute('/support/getinvolved', 'Get Involved');
    this.breadcrumbService.addFriendlyNameForRoute('/connect', 'Contact Us');
    this.breadcrumbService.addFriendlyNameForRoute('/about/team/staff-and-volunteers', 'Staff and Volunteers');
  }

  getStyle(){
    if (this.router.url === '/home'){
      return 'transparent';
    } else {
      return "#f5f5f5";
    }
  }

  hideBreadcrumb(){
    if (this.router.url === '/home'){
      return 'none';
    } else {
      return '';
    }
  }
}
