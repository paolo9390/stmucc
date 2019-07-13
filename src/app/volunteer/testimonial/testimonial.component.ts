import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../../_services/volunteer.service';
import { DefaultPanel } from '../../_models/default.model';
import { LoaderService } from '../../_services/loader.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  title: string = 'Our Experiences';
  
  christmasmission: string = '/assets/img/volunteer/christmasmission.jpg';
  heartbeat: string = '/assets/img/about/donate_heart.jpg';

  panels: DefaultPanel[];
  
  constructor(private volunteerService: VolunteerService, private loader: LoaderService) { }

  ngOnInit() {
    this.volunteerService.getTestimonialPanelsLocally().subscribe(panels => {
      this.panels = panels;
      this.loader.hide();
    });
  }

}
