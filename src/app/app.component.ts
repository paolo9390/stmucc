import { Component } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { BreadcrumbService } from './_shared/breadcrumb/breadcrumb.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Footer } from './_models/footer.model';
import { AppService } from './_services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blue = "blue";
  title = 'stmucc';
  logo: string = '/assets/img/stmucc.png';;
  logowhite: string = '/assets/img/stmuccwhite.png';;
  banner = {
    slogan: "The charity for all charities"
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

    this.iconRegistry.addSvgIconInNamespace('img', 'twitter',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/twitter.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'facebook',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/facebook.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'instagram',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/instagram.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'linkedin',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/linkedin.svg'));
    this.addBreadcrumbFriendlyNames();
  }

  addBreadcrumbFriendlyNames(){
    this.breadcrumbService.addFriendlyNameForRoute('/about/what-we-do', 'What We Do');
    this.breadcrumbService.addFriendlyNameForRoute('/about/why-we-do-it', 'Why We Do It');
    this.breadcrumbService.addFriendlyNameForRoute('/about/who-we-are', 'Who We Are');
    this.breadcrumbService.addFriendlyNameForRoute('/about/transforming', 'Transforming Lives');
    this.breadcrumbService.addFriendlyNameForRoute('/support/getinvolved', 'Get Involved');
  }

  getStyle(){
    if (this.router.url === '/home'){
      return 'transparent';
    } else {
      return "#f5f5f5";
    }
  }
}
