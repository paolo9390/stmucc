import { Component, OnInit } from '@angular/core';
import { DefaultPanel } from 'src/app/_models/default.model';
import { AboutService } from 'src/app/_services/about.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  title: string = 'Annual Reports';

  panels: DefaultPanel[];

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getAnnualReportsLocally().subscribe(panels => {
      this.panels = panels;
    });
  }

}
