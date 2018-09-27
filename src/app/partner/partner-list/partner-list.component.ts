import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css']
})
export class PartnerListComponent implements OnInit {
  partners: object;

  constructor() {
    this.partners = [
      {
        name: "WDP",
        logo: "/assets/img/partners/wdp.jpg"
      },
      {
        name: "IHP",
        logo: "/assets/img/partners/ihp.jpg"
      },
      {
        name: "Copts in need",
        logo: "/assets/img/partners/coptsinneed.png"
      },
      {
        name: "St Kyrel Trust",
        logo: "/assets/img/partners/stkyreltrust.png"
      },
      {
        name: "Coptic Orphans",
        logo: "/assets/img/partners/copticorphans.jpg"
      },
      {
        name: "Perkbox",
        logo: "/assets/img/partners/perkbox.svg"
      }
    ]
   }

  ngOnInit() {
  }

}
