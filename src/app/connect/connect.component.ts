import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  title: string = "Get in Touch";
  connect: string = '/assets/img/connect.jpg';

  constructor(
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry) { }

  ngOnInit() {
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
  }

}
