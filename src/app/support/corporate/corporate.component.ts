import { Component, OnInit } from '@angular/core';
import { TitleTextPanel } from 'src/app/_models/default.model';
import { SupportService } from 'src/app/_services/support.service';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {

  title: string = "Corporate Support";
  corporate: string = '/assets/img/support/corporate.jpg';
  corporate2: string = '/assets/img/support/corporate2.jpg';
  corporate3: string = '/assets/img/support/corporate3.jpg';

  panels: TitleTextPanel[];

  constructor(private supportService: SupportService) { }

  ngOnInit() {
    this.supportService.getCorporatePanelsLocally().subscribe(panels => {
      this.panels = panels;
    });
  }

}
