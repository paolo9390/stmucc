import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  title: string = "Get in Touch";
  connect: string = '/assets/img/connect.jpg';

  constructor(private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: string) { 

      const domain = (isPlatformServer(this.platformId)) ? 'http://localhost:4000' : '';
      const twitter = 'assets/svg/social/twitter-color.svg';
      const facebook = 'assets/svg/social/facebook-color.svg';
      const instagram = 'assets/svg/social/instagram-color.svg';
      const linkedin = 'assets/svg/social/linkedin-color.svg';
      const youtube = 'assets/svg/social/youtube-color.svg';
  
      this._matIconRegistry.addSvgIcon('twitter-color',
        this._domSanitizer.bypassSecurityTrustResourceUrl(`${domain}/${twitter}`)
      );
      this._matIconRegistry.addSvgIcon('facebook-color',
        this._domSanitizer.bypassSecurityTrustResourceUrl(`${domain}/${facebook}`)
      );
      this._matIconRegistry.addSvgIcon('instagram-color',
        this._domSanitizer.bypassSecurityTrustResourceUrl(`${domain}/${instagram}`)
      );
      this._matIconRegistry.addSvgIcon('linkedin-color',
        this._domSanitizer.bypassSecurityTrustResourceUrl(`${domain}/${linkedin}`)
      );
      this._matIconRegistry.addSvgIcon('youtube-color',
        this._domSanitizer.bypassSecurityTrustResourceUrl(`${domain}/${youtube}`)
      );
    }

  ngOnInit() {
  }

}
