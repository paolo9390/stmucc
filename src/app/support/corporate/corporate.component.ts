import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {

  title: string = "Corporate Support";
  corporate: string = '/assets/img/support/corporate.jpg';

  panels: any[] = [
    {
      title: "",
      text: "We have members of the charity working on the ground in our Cairo branch and they have established links with a range of companies, who support us through medical or construction equipment and services, as well as financial sponsorship for our projects."
    },
    {
      title: "",
      text: "Similarly, our corporate partners in the UK come primarily from the healthcare and pharmaceutical sector and support us to expand the scope of our projects."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
