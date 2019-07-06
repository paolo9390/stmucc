import { Component, OnInit } from '@angular/core';
import { SupportService } from '../_services/support.service';
import { SupportPanel } from '../_models/support.model';
import { LoaderService } from '../_services/loader.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  title = 'SUPPORT';
  panels: SupportPanel[];

  constructor(private supportService: SupportService, private loader: LoaderService) { }

  ngOnInit() {
    this.supportService.getSupportPanelsLocally().subscribe(panels => {
      this.panels = panels;
      this.loader.hide();
    });
  }

}
