import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uk',
  templateUrl: './uk.component.html',
  styleUrls: ['./uk.component.css']
})
export class UKComponent implements OnInit {

  title: string = 'Volunteer in the UK';
  
  uk: string = '/assets/img/volunteer/uk.jpg';
  heartbeat: string = '/assets/img/about/donate_heart.jpg';

  panels: any[] = [
    {
      title: "Events Volunteer",
      text: "Help co-ordinate any of our many fundraising events throughout the year and become a ‘St Mark Ambassador’ to spread the word about our work across the UK."
    },
    {
      title: "Church Rep Volunteer",
      text: "Become a ‘St Mark Ambassador’ in your local community or church, to help organise events and inform others of the work of St Mark Universal Copts Care."
    },
    {
      title: "School/College/University Volunteer",
      text: "Help to spread the word on campus at your school or university and perhaps organise fundraising initiatives. They don’t have to be grand schemes or large-scale events, because the important thing is to do something...to do the right thing. There are also opportunities to volunteer overseas."
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
