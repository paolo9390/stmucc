import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  
  title: string = 'VOLUNTEER';
  panels: any[] = [
    {
      title: "UK",
      img: "",
      url: "uk",
      button: "Volunteer in the UK",
      text: "In the UK and abroad, we’re looking for those seeking a sense of purpose and a wish to do the right thing for those less fortunate than themselves."
    },
    {
      title: "Overseas",
      img: "",
      url: "overseas",
      button: "Volunteer Overseas",
      text: "We provide opportunities to volunteer overseas through our mission trips to Egypt, which typically take place twice each year."
    },
    {
      title: "Testimonials",
      img: "",
      url: "experiences",
      button: "Our Experiences",
      text: "The experiences of volunteers are many and varied but one theme percolates through all their recollections, and that is a true sense of fulfilment..."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
