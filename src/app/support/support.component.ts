import { Component, OnInit } from '@angular/core';
import { SupportService } from '../_services/support.service';
import { SupportPanel } from '../_models/support.model';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  title = 'SUPPORT';
  panels: SupportPanel[];

  constructor(private supportService: SupportService) { }

  ngOnInit() {
    this.supportService.getSupportPanelsLocally().subscribe(panels => {
      this.panels = panels;
    });
  }

}
