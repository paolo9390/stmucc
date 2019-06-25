import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collectionbox',
  templateUrl: './collectionbox.component.html',
  styleUrls: ['./collectionbox.component.css']
})
export class CollectionBoxComponent implements OnInit {

  title: string = "Host a collection box";
  collectionbox: string = '/assets/img/support/collectionbox.jpg';

  constructor() { }

  ngOnInit() {
  }

}
