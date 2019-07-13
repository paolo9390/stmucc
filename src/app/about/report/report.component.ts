import { Component, OnInit } from '@angular/core';
import { DefaultPanel } from '../../_models/default.model';
import { AboutService } from '../../_services/about.service';
import { LoaderService } from '../../_services/loader.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  title: string = 'Annual Reports';

  panels: DefaultPanel[];

  constructor(private aboutService: AboutService, private loader: LoaderService) { }

  ngOnInit() {
    this.aboutService.getAnnualReportsLocally().subscribe(panels => {
      this.panels = panels;
      this.loader.hide();
    });
  }

}
