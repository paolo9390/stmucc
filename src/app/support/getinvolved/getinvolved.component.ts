import { Component, OnInit } from '@angular/core';
import { SupportService } from 'src/app/_services/support.service';
import { ParagraphsPanel } from 'src/app/_models/default.model';

@Component({
  selector: 'app-getinvolved',
  templateUrl: './getinvolved.component.html',
  styleUrls: ['./getinvolved.component.css']
})
export class GetInvolvedComponent implements OnInit {

  title: string = "Get involved with fundraising";
  fundraise2: string = '/assets/img/support/fundraise2.jpg';

  panels: ParagraphsPanel[];

  constructor(private supportService: SupportService) { }

  ngOnInit() {
    this.supportService.getGetInvolvedPanelsLocally().subscribe(panels => {
      this.panels = panels;
    });
  }

  fundraiseByMoneyGiving() {
    window.location.href = 'https://uk.virginmoneygiving.com/charity-web/charity/finalCharityHomepage.action?uniqueVmgCharityUrl=stmarkuniversalcoptscare';
  }
}
