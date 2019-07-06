import { Component, OnInit } from '@angular/core';
import { SupportService } from 'src/app/_services/support.service';
import { ParagraphsPanel } from 'src/app/_models/default.model';
import { LoaderService } from 'src/app/_services/loader.service';

@Component({
  selector: 'app-getinvolved',
  templateUrl: './getinvolved.component.html',
  styleUrls: ['./getinvolved.component.css']
})
export class GetInvolvedComponent implements OnInit {

  title: string = "Get involved with fundraising";
  fundraise2: string = '/assets/img/support/fundraise2.jpg';

  panels: ParagraphsPanel[];

  constructor(private supportService: SupportService, private loader: LoaderService) { }

  ngOnInit() {
    this.supportService.getGetInvolvedPanelsLocally().subscribe(panels => {
      this.panels = panels;
      this.loader.hide();
    });
  }

  fundraiseByMoneyGiving() {
    window.location.href = 'https://uk.virginmoneygiving.com/charity-web/charity/finalCharityHomepage.action?uniqueVmgCharityUrl=stmarkuniversalcoptscare';
  }
}
