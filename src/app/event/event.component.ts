import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  title: string = `St Mark's Christmas Party`;
  christmasparty: string = '/assets/img/support/christmasball.jpg';

  specs: any[] = [
    {
      description: 'Tickets cost £25 each, and include entry and dinner.',
      icon: 'local_atm'
    },
    {
      description: 'Dress code: formal.',
      icon: 'school'
    },
    {
      description: 'All ages are welcome.',
      icon: 'tag_faces'
    },
    {
      description: 'Free parking available on site',
      icon: 'local_parking'
    },
    {
      description: 'Saturday 23 November @ 7 p.m.',
      icon: 'access_time'
    },
    {
      description: 'Werneth Grange, Grange Ave, Oldham OL8 4EL',
      icon: 'my_location'
    } 
  ];

  tickets: any[] = [
    {
      value: 1,
      amount: 25
    },
    {
      value: 2,
      amount: 50
    },
    {
      value: 3,
      amount: 75
    },
    {
      value: 4,
      amount: 100
    },
    {
      value: 5,
      amount: 125
    },
    {
      value: 6,
      amount: 150
    },
    {
      value: 7,
      amount: 175
    },
    {
      value: 8,
      amount: 200
    },
    {
      value: 9,
      amount: 225
    },
    {
      value: 10,
      amount: 250
    }];

  selected: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.selected) {
      window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=NDU9BDRHXRYQN&item_name=ChristmasBall2019&currency_code=GBP&amount=${this.selected}`;
    }
  }

}
