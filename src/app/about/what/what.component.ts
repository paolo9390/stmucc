import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.css']
})
export class WhatComponent implements OnInit {

  title: string = 'WHAT WE DO';
  
  whatwedo: string = '/assets/img/about/whatwedo.jpg';
  heartbeat: string = '/assets/img/about/donate_heart.jpg';

  panels: any[] = [
    {
      title: "",
      text: "We raise funds to provide the medicines and the infrastructure, equipment and knowledge to combat disease."
    },
    {
      title: "",
      text: "We improve physical and mental health to support people to build better lives."
    },
    {
      title: "",
      text: "We build healthcare centres and hospitals and provide life-saving medicines and equipment for impoverished communities."
    },
    {
      title: "",
      text: "We work with Christian dioceses in Egypt and beyond to identify communities in most need of support, irrespective of faith."
    },
    {
      title: "",
      text: "We manage a volunteer programme in which doctors can give their time to deliver medical aid, provide diagnoses, and perform operations and other medical interventions for people who cannot gain access to health services. And we fund and co-ordinate volunteers’ trips to areas of need."
    },
    {
      title: "",
      text: "We work with local charities on fundraising initiatives and projects in Warrington, Cheshire, to make a difference closer to home, and to put something back into the community in which we live and work."
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
