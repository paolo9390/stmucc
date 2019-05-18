import { Component, OnInit } from '@angular/core';
import { VolunteerService } from 'src/app/_services/volunteer.service';
import { TitleText } from 'src/app/_models/default.model';

@Component({
  selector: 'app-uk',
  templateUrl: './uk.component.html',
  styleUrls: ['./uk.component.css']
})
export class UKComponent implements OnInit {

  title: string = 'Volunteer in the UK';
  
  uk: string = '/assets/img/volunteer/uk.jpg';
  heartbeat: string = '/assets/img/about/donate_heart.jpg';

  panels: TitleText[];

  constructor(private volunteerService: VolunteerService) { }

  ngOnInit() {
    this.volunteerService.getUKPanelsLocally().subscribe(panels => {
      this.panels = panels;
    });
  }

}
