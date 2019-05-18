import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../_services/volunteer.service';
import { VolunteerPanel } from '../_models/volunteer.model';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  
  title: string = 'VOLUNTEER';
  panels: VolunteerPanel[];

  constructor(private volunteerService: VolunteerService) { }

  ngOnInit() {
    this.volunteerService.getVolunteerPanelsLocally().subscribe(panels => {
      this.panels = panels;
    });
  }

}
