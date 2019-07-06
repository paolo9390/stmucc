import { Component, OnInit } from '@angular/core';
import { VolunteerService } from 'src/app/_services/volunteer.service';
import { TitleTextPanel } from 'src/app/_models/default.model';
import { LoaderService } from 'src/app/_services/loader.service';

@Component({
  selector: 'app-overseas',
  templateUrl: './overseas.component.html',
  styleUrls: ['./overseas.component.css']
})
export class OverseasComponent implements OnInit {
  
  overseas: string = '/assets/img/volunteer/overseas.jpg';
  overseas2: string = '/assets/img/volunteer/overseas2.jpg';
  title: string = 'Volunteer Overseas';

  panels: TitleTextPanel[];

  constructor(private volunteerService: VolunteerService, private loader: LoaderService) { }

  ngOnInit() {
    this.volunteerService.getOverseasPanelsLocally().subscribe(panels => {
      this.panels = panels;
      this.loader.hide();
    });
  }

}
