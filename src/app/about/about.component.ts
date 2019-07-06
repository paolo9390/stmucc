import { Component, OnInit } from '@angular/core';
import { AboutService } from '../_services/about.service';
import { AboutPanel } from '../_models/about.model';
import { LoaderService } from '../_services/loader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  title: string = 'ABOUT US';
  youthpower: string = '/assets/img/about/youthpower.jpg';
  whoweare3: string = '/assets/img/about/whoweare3.jpg';
  panels: AboutPanel[];

  constructor(private aboutService: AboutService, private loader: LoaderService) { }

  ngOnInit() {
    this.aboutService.getAboutPanelsLocally().subscribe(panels => {
      this.panels = panels;
      this.loader.hide();
    });
  }

}
