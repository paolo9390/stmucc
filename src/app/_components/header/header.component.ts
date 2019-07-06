import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'stmucc';
  logo: string = '/assets/img/stmucc-brand-logo.png';
  banner = {
    slogan: "Give health, give life, give hope"
  };
  
  constructor() { }

  ngOnInit() {
  }

}
