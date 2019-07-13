import { Component, OnInit } from '@angular/core';
import { DefaultPanel } from '../../_models/default.model';
import { AboutService } from '../../_services/about.service';
import { LoaderService } from '../../_services/loader.service';

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

  constructor(private aboutService: AboutService, private loader: LoaderService) { }

  ngOnInit() {
    this.aboutService.getWhatPanelsLocally().subscribe(panels => {
      this.panels = panels;
      this.loader.hide();
    });
  }

}
