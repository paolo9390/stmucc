import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'donation-signup',
  templateUrl: './donation-signup.component.html',
  styleUrls: ['./donation-signup.component.css']
})
export class DonationSignupComponent implements OnInit {

  @Input() donationAmount: number;

  constructor() { }

  ngOnInit() {
  }

}
