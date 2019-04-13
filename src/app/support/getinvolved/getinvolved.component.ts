import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getinvolved',
  templateUrl: './getinvolved.component.html',
  styleUrls: ['./getinvolved.component.css']
})
export class GetInvolvedComponent implements OnInit {

  title: string = "Get involved with fundraising";
  getinvolved: string = '/assets/img/support/getinvolved.jpg';

  panels: any[] = [
    {
      title: "",
      text: "This ranges from the generosity of our generous corporate and individual donors, and many others investing their time and ingenuity to help raise funds, through all manner of sporting and other challenges; attracting sponsorship and spreading goodwill in the process."
    },
    {
      title: "",
      text: "As always, there’s much more to do, and with ambitious aspirations to support more and more people gain access to healthcare and improve their life chances, we need your help to improve the lives of millions of people overseas and in the UK."
    },
    {
      title: "",
      text: "In addition to direct donations, you can support St Mark Universal Copts Care in a number of ways: • Bequests • Fundraising through schools • Events from musical performances to Christmas concerts and summer balls • Sponsored challenge and sporting activities • Support in kind from the UK or Egypt – donating time, skills or services for any of our life-enhancing projects."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
