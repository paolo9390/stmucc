import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  title: string = "Get in Touch";
  connect: string = '/assets/img/connect.jpg';

  constructor() { }

  ngOnInit() {
  }

}
