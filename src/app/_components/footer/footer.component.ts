import { Component, OnInit } from '@angular/core';
import { Footer } from '../../_models/footer.model';
import { AppService } from '../../_services/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fundraisingLogo: string = '/assets/img/fundraising-regulator.png';
  frlogo: string = '/assets/img/fr.png';
  logowhite: string = '/assets/img/stmuccwhite.png';;
  footerDetails: Footer[];


  constructor(
    private appService: AppService) { }

  ngOnInit() {
    this.appService.getFooterLocally().subscribe(footerDetails => {
      this.footerDetails = footerDetails;
    });
  }

}
