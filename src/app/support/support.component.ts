import { Component, OnInit } from '@angular/core';
import { SupportService } from '../_services/support.service';
import { SupportPanel } from '../_models/support.model';
import { LoaderService } from '../_services/loader.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  title = 'SUPPORT';
  panels: SupportPanel[];

  constructor(private supportService: SupportService, 
    private loader: LoaderService,
    private meta: Meta) { }

  ngOnInit() {
    this.supportService.getSupportPanelsLocally().subscribe(panels => {
      this.panels = panels;
      this.loader.hide();
    });

    this.addMetaTags();
  }

  addMetaTags(): void {
    this.meta.addTag({ property: 'og:title', content: 'StMUCC - Support Us' });
    this.meta.addTag({ property: 'og:url', content: 'https://stmarkuniversalcoptscare.org/support' });
    this.meta.addTag({ property: 'og:description', content: 'We appreciate whatever individuals or businesses are able to do in support of our vital work, and we’re always looking for new initiatives and opportunities.' });
  }

}
