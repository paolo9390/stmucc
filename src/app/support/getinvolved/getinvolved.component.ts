import { Component, OnInit } from '@angular/core';
import { SupportService } from 'src/app/_services/support.service';
import { TitleTextPanel } from 'src/app/_models/default.model';

@Component({
  selector: 'app-getinvolved',
  templateUrl: './getinvolved.component.html',
  styleUrls: ['./getinvolved.component.css']
})
export class GetInvolvedComponent implements OnInit {

  title: string = "Get involved with fundraising";
  getinvolved: string = '/assets/img/support/getinvolved.jpg';
  frlogo: string = '/assets/img/frwhite.png';

  panels: TitleTextPanel[];

  supports: any = [
    {
      name: 'Bequests'
    },
    {
      name: 'Fundraising through schools'
    },
    {
      name: 'Events from musical performances to Christmas concerts and summer balls'
    },
    {
      name: 'Sponsored challenge and sporting activities'
    },
    {
      name: 'Support in kind from the UK or overseas – donating time, skills or services for any of our life-enhancing projects'
    }
  ]

  constructor(private supportService: SupportService) { }

  ngOnInit() {
    this.supportService.getGetInvolvedPanelsLocally().subscribe(panels => {
      this.panels = panels;
    });
  }

  sendMail() {
    window.location.href = "mailto:ashley.williams@stmucc.com?Subject=Fundraise%20for%20StMark";
  }
}
