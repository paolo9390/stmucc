import { Component, OnInit } from '@angular/core';
import { TitleTextPanel } from 'src/app/_models/default.model';
import { SupportService } from 'src/app/_services/support.service';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {

  title: string = "Corporate Giving";
  corporate: string = '/assets/img/support/corporate.jpg';
  corporatesmall: string = '/assets/img/support/corporate-small.jpg';
  campaign: string = '/assets/img/support/campaign.jpg';

  panels: TitleTextPanel[];

  ideas = [
    {
      description: 'Make St Mark Universal Copts Care your charity of the year and hold fundraising events',
    },
    {
      description: 'Sponsor one of our events',
    },
    {
      description: 'Sponsor one of our projects or campaigns',
    },
    {
      description: 'Buy naming rights for a room or building across the network of our projects',
    },
    {
      description: 'Host collection boxes at your premises',
    },
    {
      description: 'Donate raffle prizes',
    }
  ];

  constructor(private supportService: SupportService) { }

  ngOnInit() {
    this.supportService.getCorporatePanelsLocally().subscribe(panels => {
      this.panels = panels;
    });
  }

}
