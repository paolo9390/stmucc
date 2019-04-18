import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  title = 'SUPPORT';
  panels: any[] = [
    {
      title: 'Corporate',
      img: '',
      url: 'corporate',
      button: 'Corporate Support',
      text: 'Whether in Egypt or the UK, we would welcome more businesses to become corporate partners with us, to help deliver on our goals.'
    },
    {
      title: 'Fundraise',
      img: '',
      url: 'getinvolved',
      button: 'Get Involved',
      text: 'We are grateful for all the support that we receive, because every donation, however small, enables us to do the right thing in support of those without a voice.'
    },
    {
      title: 'Gold Card',
      img: '',
      url: 'gold-card',
      button: 'Sign Up',
      text: 'Sign up today and receive a wide range of exclusive offers and perks for as little as £10 a month which will pay for a patient in the Middle East\'s prescription medication.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
