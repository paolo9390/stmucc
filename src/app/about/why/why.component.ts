import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {

  title: string = 'WHY WE DO IT';
  
  whatwedo: string = '/assets/img/about/whatwedo.jpg';
  heartbeat: string = '/assets/img/about/donate_heart.jpg';

  panels: any[] = [
    {
      title: "",
      text: "However we know there is a startling disparity of wealth and economic opportunity around the world; therefore St Mark Universal Copts Care is here to do the right thing for millions of people who simply do not have a voice, or another champion fighting their cause."
    },
    {
      title: "",
      text: "As a charity, and one founded on Christian principles, we exist to champion the cases of those in desperate need, whose medical needs go unanswered, and whose communities suffer as a consequence."
    },
    {
      title: "",
      text: "At home, we endeavour to support and work with those organisations which provide crucial local services – perhaps those smaller charities and voluntary groups that are plugging gaps in welfare spending or simply working in a charity sector where there is low public awareness of the requirement for funding or volunteers; despite being worthy causes or services."
    },
    {
      title: "",
      text: "Any support we give, or project we undertake, is the result of careful consideration and an examination of the genuine need involved. We always want our efforts to be effective... to make a difference... to transform lives. And we do!"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
