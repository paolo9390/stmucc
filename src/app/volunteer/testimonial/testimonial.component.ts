import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  title: string = 'Our Experiences';
  
  christmasmission: string = '/assets/img/volunteer/christmasmission.jpg';
  heartbeat: string = '/assets/img/about/donate_heart.jpg';

  panels: any[] = [
    {
      title: "Amir Armanios - Christmas Mission Volunteer",
      text: "We step out of ordinary life to meet people in real need and we make great friends at the same time. To see the smiles on the faces of children who have nothing, receiving a Christmas present for the very first time, is incredible.  Well... I wouldn’t want anything else"
    },
    {
      title: "Monica Boughdady - Christmas Mission Volunteer",
      text: "Seeing the work we do, and the children here on Christmas Day made a great difference to me because I could see what a difference it made to the children in Egypt."
    },
    {
      title: "Christopher Fouad - Christmas/Summer Mission Volunteer",
      text: "We came to teach the children English but they taught us much more. It’s the reason I volunteer, because it’s the most direct way that I can help to change people’s lives for the better. Teaching English in the summer, or presenting gifts to children at Christmas and seeing the smiles on their faces, is just so humbling"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
