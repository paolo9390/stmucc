import { Component, OnInit } from '@angular/core';
import { SupportService } from '../../_services/support.service';
import { MatDialog } from '@angular/material';
import { LoaderService } from '../../_services/loader.service';
import { SupporterPanel } from '../../_models/support.model';

@Component({
  selector: 'app-supporter',
  templateUrl: './supporter.component.html',
  styleUrls: ['./supporter.component.css']
})
export class SupporterComponent implements OnInit {

  title: string = 'Our Supporters';

  supporters: SupporterPanel[];

  constructor(public dialog: MatDialog, private supportService: SupportService, private loader: LoaderService) { }

  ngOnInit() {
    this.supportService.getSupporters().subscribe(supporters => {
      this.supporters = supporters;
      this.loader.hide();
    });
  }
}
