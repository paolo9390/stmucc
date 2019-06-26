import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  title: string = "Thank You";
  thankyou: string = '/assets/img/support/thankyou.jpg';
  message: string = 'thank you - your donation is on its way';

  constructor() { }

  ngOnInit() {
  }

}
