import { Component, OnInit } from '@angular/core';
import { AboutService } from '../_services/about.service';
import { AboutPanel } from '../_models/about.model';
import { LoaderService } from '../_services/loader.service';
import { Meta } from '@angular/platform-browser';

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

  constructor(private aboutService: AboutService,
    private loader: LoaderService,
    private meta: Meta) { }

  ngOnInit() {
    this.aboutService.getAboutPanelsLocally().subscribe(panels => {
      this.panels = panels;
      this.loader.hide();
    });

    this.addMetaTags();
  }

  addMetaTags(): void {
    this.meta.addTag({ property: 'og:title', content: 'St Mark Universal Care - About Us' });
    this.meta.addTag({ property: 'og:url', content: 'https://stmarkuniversalcare.org/about' });
    this.meta.addTag({ property: 'og:description', content: 'St Mark Universal Care exists to do the right thing for those in need, overseas and in the UK, transforming lives around the world.' });
  }

}
