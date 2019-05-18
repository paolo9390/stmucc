import { Component, OnInit } from '@angular/core';
import { VolunteerService } from 'src/app/_services/volunteer.service';
import { TitleText } from 'src/app/_models/default.model';

@Component({
  selector: 'app-overseas',
  templateUrl: './overseas.component.html',
  styleUrls: ['./overseas.component.css']
})
export class OverseasComponent implements OnInit {
  
  overseas: string = '/assets/img/volunteer/overseas.jpg';
  title: string = 'Volunteer Overseas';

  panels: TitleText[];

  constructor(private volunteerService: VolunteerService) { }

  ngOnInit() {
    this.volunteerService.getOverseasPanelsLocally().subscribe(panels => {
      this.panels = panels;
    });
  }

}
