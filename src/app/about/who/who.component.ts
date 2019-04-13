import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})
export class WhoComponent implements OnInit {
  
  whoweare: string = '/assets/img/about/whoweare.jpg';
  title: string = 'WHO WE ARE';

  panels: any[] = [
    {
      title: "",
      text: "As our founding members are trained medical professionals, with a track record in running hospitals, we focused on the physical and mental well-being of people living in the margins of society, with limited access to health services and life-saving medicines. Those people deserve our help, and we deliver this on the ground through planned health and welfare projects and we make a real difference... improving the health of individuals and communities."
    },
    {
      title: "",
      text: "We are a young and vibrant charity. Recently formed, we are a highly motivated group of people, with more joining all the time, to ensure that we have the blend of experience and energy required to tackle the growth and spread of our work in the UK and overseas."
    },
    {
      title: "",
      text: "The results of our work speak for themselves.  Being able to witness positive change to health outcomes is what drives us on to improve the lot of the millions of people who are still in desperate need, free them from illness where possible and promote greater wellbeing to enable them to escape from grinding poverty."
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
