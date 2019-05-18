import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/_services/about.service';
import { TitleTextPanel } from 'src/app/_models/default.model';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {

  title: string = 'WHY WE DO IT';
  
  whatwedo: string = '/assets/img/about/whatwedo.jpg';
  heartbeat: string = '/assets/img/about/donate_heart.jpg';

  panels: TitleTextPanel[];

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getWhyPanelsLocally().subscribe(panels => {
      this.panels = panels;
    });
  }

}
