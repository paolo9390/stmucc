import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  title: string = `St Mark's Christmas Party`;
  christmasparty: string = '/assets/img/support/christmasball.jpg';
  
  adultprice: number = 25;
  adulttickets: number = 0;
  adultselected: number = 0;
  studentprice: number = 20;
  studenttickets: number = 0;
  studentselected: number = 0;
  juniorprice: number = 10;
  juniortickets: number = 0;
  juniorselected: number = 0;
  selected: number = 0;

  specs: any[] = [
    {
      description: 'Tickets cost £25 each for adults, £20 for students, £10 for under 12s and free for under 5s.',
      icon: 'local_atm'
    },
    {
      description: 'Tickets include entry and dinner.',
      icon: 'restaurant'
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
  

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.selected = this.adultselected + this.studentselected + this.juniorselected;
    const tickets = `A${this.adulttickets}S${this.studenttickets}J${this.juniortickets}`;
    if (this.selected) {
      window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=NDU9BDRHXRYQN&item_name=ChristmasBall2019${tickets}&currency_code=GBP&amount=${this.selected}`;
    }
  }

  addTicket(person: string) {
    if (person === 'adult') {
      this.adulttickets = this.adulttickets + 1;
      this.adultselected = this.adultprice * this.adulttickets;
    } else if (person === 'student') {
      this.studenttickets = this.studenttickets + 1;
      this.studentselected = this.studentprice * this.studenttickets;
    } else if (person === 'junior') {
      this.juniortickets = this.juniortickets + 1;
      this.juniorselected = this.juniorprice * this.juniortickets;
    }
  }

  removeTicket(person: string) {
    if (person === 'adult') {
      if (this.adulttickets !== 0) this.adulttickets = this.adulttickets - 1;
      this.adultselected = this.adultprice * this.adulttickets;
    } else if (person === 'student') {
      if (this.studenttickets !== 0) this.studenttickets = this.studenttickets - 1;
      this.studentselected = this.studentprice * this.studenttickets;
    } else if (person === 'junior') {
      if (this.juniortickets !== 0) this.juniortickets = this.juniortickets - 1;
      this.juniorselected = this.juniorprice * this.juniortickets;
    }
  }

}
