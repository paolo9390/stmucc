import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../_services/volunteer.service';
import { VolunteerPanel } from '../_models/volunteer.model';
import { LoaderService } from '../_services/loader.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  
  title: string = 'VOLUNTEER';
  panels: VolunteerPanel[];

  constructor(private volunteerService: VolunteerService, private loader: LoaderService) { }

  ngOnInit() {
    this.volunteerService.getVolunteerPanelsLocally().subscribe(panels => {
      this.panels = panels;
      this.loader.hide();
    });
  }

}
