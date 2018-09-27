import { Component } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

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
    slogan: "the charity for all charities"
  };
  footerDetails: object;

  constructor (
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router

    ){
      this.logo = '/assets/img/stmucc.png';
      this.logowhite = '/assets/img/stmuccwhite.png';

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
  getStyle(){
    if (this.router.url === '/home'){
      return 'transparent';
    } else {
      return "#f5f5f5";
    }
  }
}
