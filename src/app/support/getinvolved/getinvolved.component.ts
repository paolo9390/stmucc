import { Component, OnInit } from '@angular/core';
import { SupportService } from 'src/app/_services/support.service';
import { TitleText } from 'src/app/_models/default.model';

@Component({
  selector: 'app-getinvolved',
  templateUrl: './getinvolved.component.html',
  styleUrls: ['./getinvolved.component.css']
})
export class GetInvolvedComponent implements OnInit {

  title: string = "Get involved with fundraising";
  getinvolved: string = '/assets/img/support/getinvolved.jpg';

  panels: TitleText[];

  constructor(private supportService: SupportService) { }

  ngOnInit() {
    this.supportService.getGetInvolvedPanelsLocally().subscribe(panels => {
      this.panels = panels;
    });
  }

}
