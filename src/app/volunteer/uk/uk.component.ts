import { Component, OnInit } from '@angular/core';
import { VolunteerService } from 'src/app/_services/volunteer.service';
import { DefaultPanel } from 'src/app/_models/default.model';
import { LoaderService } from 'src/app/_services/loader.service';

@Component({
  selector: 'app-uk',
  templateUrl: './uk.component.html',
  styleUrls: ['./uk.component.css']
})
export class UKComponent implements OnInit {

  title: string = 'Volunteer in the UK';
  
  uk: string = '/assets/img/volunteer/uk.jpg';
  heartbeat: string = '/assets/img/about/donate_heart.jpg';

  panels: DefaultPanel[];

  constructor(private volunteerService: VolunteerService, private loader: LoaderService) { }

  ngOnInit() {
    this.volunteerService.getUKPanelsLocally().subscribe(panels => {
      this.panels = panels;
      this.loader.hide();
    });
  }

}
