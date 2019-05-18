import { Component, OnInit } from '@angular/core';
import { DefaultPanel } from 'src/app/_models/default.model';
import { AboutService } from 'src/app/_services/about.service';

@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.css']
})
export class WhatComponent implements OnInit {

  title: string = 'WHAT WE DO';
  
  whatwedo: string = '/assets/img/about/whatwedo.jpg';
  heartbeat: string = '/assets/img/about/donate_heart.jpg';

  panels: DefaultPanel[];

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getWhatPanelsLocally().subscribe(panels => {
      this.panels = panels;
    });
  }

}
