import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  panels: object;

  constructor() {
    this.panels = [
      {
        title: "Online Shop",
        img: "/assets/img/shop/clothing.jpg",
        text: "Get our latest St Mark hoodie and t-shirt in our online shop",
        button: "Shop Now and save lives",
        link: "./"
      },
      {
        title: "Bracelet",
        img: "/assets/img/shop/bracelet.png",
        text: "Raise awareness and join the cause by wearing our fancy bracelets",
        button: "Join the cause",
        link: "./"
      },
      {
        title: "eBay Shop",
        img: "/assets/img/shop/online.jpg",
        text: "Discover many selection of quality clothing on our eBay shop.",
        button: "Visit our Ebay",
        link: "./"
      }
    ]
   }

  ngOnInit() {
  }

}
