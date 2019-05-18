import { Component, OnInit } from '@angular/core';
import { AboutService } from '../_services/about.service';
import { AboutPanel } from '../_models/about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  title: string = 'ABOUT US';
  panels: AboutPanel[];

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getAboutPanelsLocally().subscribe(panels => {
      this.panels = panels;
    });
  }

}
