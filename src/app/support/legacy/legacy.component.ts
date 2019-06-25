import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legacy',
  templateUrl: './legacy.component.html',
  styleUrls: ['./legacy.component.css']
})
export class LegacyComponent implements OnInit {

  title: string = "Legacies";
  legacies: string = '/assets/img/support/legacies.jpg';
  legacy: string = '/assets/img/support/legacy.jpg';

  constructor() { }

  ngOnInit() {
  }

}
