import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  title: string = 'ABOUT US';
  panels: any[] = [
    {
      title: "Who We Are",
      img: "",
      url: "who-we-are",
      button: "Who We Are",
      text: "Read more about our organization"
    },
    {
      title: "What We Do",
      img: "",
      url: "what-we-do",
      button: "What We Do",
      text: "Discover how our vital support is making a real difference"
    },
    {
      title: "Why We Do It",
      img: "",
      url: "why-we-do-it",
      button: "Why We Do It",
      text: "Read more about why we do what we do."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
