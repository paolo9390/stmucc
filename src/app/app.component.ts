import { Component } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { BreadcrumbService } from './shared/breadcrumb/breadcrumb.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blue = "blue";
  title = 'stmucc';
  logo: string;
  logowhite: string;
  banner = {
    slogan: "The charity for all charities"
  };
  footerDetails: object;

  constructor (
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry,
    private breadcrumbService: BreadcrumbService,
    private router: Router

    ){
      this.logo = '/assets/img/stmucc.png';
      this.logowhite = '/assets/img/stmuccwhite.png';

      this.addBreadcrumbFriendlyNames();

      this.footerDetails = [
        {
          name: 'Media',
          link: './',
          sublist: [
            {
            name: 'Photos',
            link: './'
            },
            {
              name: 'Videos',
              link: './'
            },
            {
              name: 'Newsletters',
              link: './'
            }
          ]
        },
        {
          name: 'Help Us',
          link: './',
          sublist: [
            {
            name: 'Donate',
            link: './'
            },
            {
              name: 'Volunteer',
              link: './'
            },
            {
              name: 'Youth Mission',
              link: './'
            }
          ]
        },
        {
          name: 'StMUCC',
          link: './',
          sublist: [
            {
            name: 'Community',
            link: './'
            },
            {
              name: 'Careers',
              link: './'
            },
            {
              name: 'JustGiving',
              link: './'
            }
          ]
        },
      ];

  }

  ngOnInit() {
    this.iconRegistry.addSvgIconInNamespace('img', 'twitter',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/twitter.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'facebook',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/facebook.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'instagram',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/instagram.svg'));

    this.iconRegistry.addSvgIconInNamespace('img', 'linkedin',
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/linkedin.svg'));


    console.log(this.router.url);

  }

  addBreadcrumbFriendlyNames(){
    this.breadcrumbService.addFriendlyNameForRoute('/about/what-we-do', 'What We Do');
    this.breadcrumbService.addFriendlyNameForRoute('/about/why-we-do-it', 'Why We Do It');
    this.breadcrumbService.addFriendlyNameForRoute('/about/who-we-are', 'Who We Are');
    this.breadcrumbService.addFriendlyNameForRoute('/about/transforming', 'Transforming Lives');
  }

  getStyle(){
    if (this.router.url === '/home'){
      return 'transparent';
    } else {
      return "#f5f5f5";
    }
  }
}
