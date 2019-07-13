import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'stmucc';
  logo: string = '/assets/img/stmucc-brand-logo.png';
  banner = {
    slogan: "Give health, give life, give hope"
  };
  
  constructor(
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry) { }

  ngOnInit() {

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
  }

}
