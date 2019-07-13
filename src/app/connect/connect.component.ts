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
    this.iconRegistry.addSvgIcon('twitter-color',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/twitter-color.svg')
    );
    this.iconRegistry.addSvgIcon('facebook-color',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/facebook-color.svg')
    );
    this.iconRegistry.addSvgIcon('instagram-color',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/instagram-color.svg')
    );
    this.iconRegistry.addSvgIcon('linkedin-color',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/linkedin-color.svg')
    );
    this.iconRegistry.addSvgIcon('youtube-color',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/social/youtube-color.svg')
    );
  }

}
