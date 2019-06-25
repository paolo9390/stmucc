import { Component, OnInit } from '@angular/core';
import { SupportService } from 'src/app/_services/support.service';
import { ParagraphsPanel } from 'src/app/_models/default.model';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  title: string = "Our Fundraising Promise";
  promise: string = '/assets/img/support/promise.jpg';
  frbadge: string = '/assets/img/support/fr-badge.jpg';

  panels: ParagraphsPanel[];

  constructor(private supportService: SupportService) { }

  ngOnInit() {
    this.supportService.getFundraisingPromisePanelsLocally().subscribe(panels => {
      this.panels = panels;
    });
  }

}
