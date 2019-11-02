import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'St Mark Universal Care';
  logo: string = '/assets/img/stmucc-brand-logo.png';
  banner = {
    slogan: "Give health, give life, give hope"
  };
  
  constructor(private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: string) { 

      const domain = (isPlatformServer(this.platformId)) ? 'http://localhost:4000' : '';
      const twitter = 'assets/svg/social/twitter.svg';
      const facebook = 'assets/svg/social/facebook.svg';
      const instagram = 'assets/svg/social/instagram.svg';
      const linkedin = 'assets/svg/social/linkedin.svg';
      const youtube = 'assets/svg/social/youtube.svg';
  
      this._matIconRegistry.addSvgIcon('twitter',
        this._domSanitizer.bypassSecurityTrustResourceUrl(`${domain}/${twitter}`)
      );
      this._matIconRegistry.addSvgIcon('facebook',
        this._domSanitizer.bypassSecurityTrustResourceUrl(`${domain}/${facebook}`)
      );
      this._matIconRegistry.addSvgIcon('instagram',
        this._domSanitizer.bypassSecurityTrustResourceUrl(`${domain}/${instagram}`)
      );
      this._matIconRegistry.addSvgIcon('linkedin',
        this._domSanitizer.bypassSecurityTrustResourceUrl(`${domain}/${linkedin}`)
      );
      this._matIconRegistry.addSvgIcon('youtube',
        this._domSanitizer.bypassSecurityTrustResourceUrl(`${domain}/${youtube}`)
      );
    }

  ngOnInit() {
  }

}
