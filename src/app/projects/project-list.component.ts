import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  title: string = 'OUR PROJECTS';
  
  whatwedo: string = '/assets/img/about/whatwedo.jpg';
  fundraise: string = '/assets/img/projects/fundraise-icon.png';

  panels: any[] = [
    {
      title: "My Health Programme"
    },
    {
      title: "Medicine Distribution Programme"
    },
    {
      title: "Medical and Nursing Skills Training"
    },
    {
      title: "International Health Partners"
    },
    {
      title: "Cancer Research Library"
    },
    {
      title: "The Phoenix Project"
    },
    {
      title: "Project Happiness"
    },
    {
      title: "The Happy Heart"
    },
    {
      title: "Physiotherapy Centre – Naqada"
    },
    {
      title: "Socio-Economic Projects"
    },
    {
      title: "Partnerships"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
