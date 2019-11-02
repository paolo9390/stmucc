import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../_services/volunteer.service';
import { VolunteerPanel } from '../_models/volunteer.model';
import { LoaderService } from '../_services/loader.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  
  title: string = 'VOLUNTEER';
  panels: VolunteerPanel[];

  constructor(private volunteerService: VolunteerService,
    private loader: LoaderService,
    private meta: Meta) { }

  ngOnInit() {
    this.volunteerService.getVolunteerPanelsLocally().subscribe(panels => {
      this.panels = panels;
      this.loader.hide();
    });

    this.addMetaTags();
  }

  addMetaTags(): void {
    this.meta.addTag({ property: 'og:title', content: 'StMUC - Volunteer' });
    this.meta.addTag({ property: 'og:url', content: 'https://stmarkuniversalcare.org/volunteer' });
    this.meta.addTag({ property: 'og:description', content: 'If becoming a volunteer is something for you, then read on to learn more about the many opportunities available.  Remember, any voluntary work you undertake will have a real and positive impact on the lives of many people.' });
  }

}
