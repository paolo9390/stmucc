import { Component, OnInit } from '@angular/core';
import { TitleTextPanel } from '../../_models/default.model';
import { AboutService } from '../../_services/about.service';
import { LoaderService } from '../../_services/loader.service';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})
export class WhoComponent implements OnInit {
  
  whoweare: string = '/assets/img/about/whoweare.jpg';
  smile: string = '/assets/img/about/smile.jpg';
  title: string = 'WHO WE ARE';

  panels: TitleTextPanel[];

  constructor(private aboutService: AboutService, private loader: LoaderService) { }

  ngOnInit() {
    this.aboutService.getWhoPanelsLocally().subscribe(panels => {
      this.panels = panels;
      this.loader.hide();
    });
  }

}
