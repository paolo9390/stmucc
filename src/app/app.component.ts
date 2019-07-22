import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { BreadcrumbService } from './_shared/breadcrumb/breadcrumb.service';
import { LoaderState, LoaderService } from './_services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  routerSubscription: Subscription;
  loadingSubscription: Subscription;
  loading: boolean;

  constructor (
    private breadcrumbService: BreadcrumbService,
    private loaderService: LoaderService,
    public router: Router,
    @Inject(PLATFORM_ID) private platform: Object
    ){
  }

  ngOnInit() {

    this.loadingSubscription = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
        this.loading = state.show;
    });

    // not render in ssr
    if (isPlatformBrowser(this.platform)) {
      this.routerSubscription = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)).subscribe(
          () => window.scrollTo(0, 0)
        );
    }

    this.addBreadcrumbFriendlyNames();
  }

  ngOnDestroy() {
    if (this.loadingSubscription){
      this.loadingSubscription.unsubscribe();
    }
    if (this.routerSubscription){
      this.routerSubscription.unsubscribe();
    }
  }

  addBreadcrumbFriendlyNames(){
    this.breadcrumbService.hideRoute('**');
    this.breadcrumbService.addFriendlyNameForRoute('/about/what-we-do', 'What We Do');
    this.breadcrumbService.addFriendlyNameForRoute('/about/why-we-do-it', 'Why We Do It');
    this.breadcrumbService.addFriendlyNameForRoute('/about/who-we-are', 'Who We Are');
    this.breadcrumbService.addFriendlyNameForRoute('/about/annual-reports', 'Annual Reports');
    this.breadcrumbService.addFriendlyNameForRoute('/support/gold-card', 'The Gold Card');
    this.breadcrumbService.addFriendlyNameForRoute('/support/collection-box', 'Collection box');
    this.breadcrumbService.addFriendlyNameForRoute('/support/fundraising-promise', 'Fundraising Promise');
    this.breadcrumbService.addFriendlyNameForRoute('/about/team/staff-and-volunteers', 'Staff and Volunteers');
  }

  getStyle(){
    if (this.router.url === '/'){
      return 'transparent';
    } else {
      return "#f5f5f5";
    }
  }

  hideBreadcrumb(){
    if (this.router.url === '/'){
      return 'none';
    } else {
      return '';
    }
  }
}
