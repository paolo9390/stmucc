import { Component, OnInit, OnDestroy } from '@angular/core';
import { PanelService } from '../services/panel.service';
import { Panel } from '../models/panel.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelImg: string;
  pans: object;

  panels: Observable<Panel[]>
  _panels: Panel[];
  panelsSubscription: Subscription;

  constructor(private panelService: PanelService) {

    this.panelImg = '/assets/img/heal.jpeg'

    this.pans = [      
      {
        title: "Appeals",
        img: "/assets/img/appeals.jpg",
        text: "Find out about volunteering, fundraising or taking part in an event",
        button: "Find out more",
        url: ""
      },
      {
        title: "Gold Card",
        img: "/assets/img/goldcard.jpg",
        text: "Receive exclusive offers and perks for as little as £10 a month which will pay for a patient in the Middle East's prescription medication",
        button: "Apply for a card",
        url: '/support/gold-card'
      },
      {
        title: "Our progress",
        help: [{
          name: "Operations",
          value: 1231,
          icon: "local_hospital"
        },{
          name: "Prescriptions",
          value: 409312,
          icon: "local_pharmacy"
        }],
        text: "Learn more about the work we do and help us to treat illnesses and perform medical operations",
        button: "Donate",
        url: ""
      },
      {
        title: "News",
        img: "/assets/img/phoenix.jpg",
        text: "Read the latest news about our support",
        button: "Read more",
        url: ""
      },      
      {
        title: "Get Involved",
        img: "/assets/img/getinvolved.jpg",
        text: "Find out about volunteering, fundraising or taking part in an event",
        button: "Get Involved",
        url: ""
      },
      {
        title: "Summer Mission 2018",
        img: "/assets/img/summermission.jpg",
        text: "Apply now to come on our Summer Mission to Egypt, helping youngsters learn English",
        button: "Join the trip",
        url: ""
      }
    ];

   }

  ngOnInit() {
    this.panelService.getPanels().subscribe(panels => {
      this._panels = panels;
    })
  }

  ngOnDestroy() {
    if (this.panelsSubscription){
      this.panelsSubscription.unsubscribe();
    }
  }

}
