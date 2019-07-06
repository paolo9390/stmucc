import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../_services/partner.service';
import { Partner } from '../_models/partner.model';
import { MatDialog } from '@angular/material';
import { SingularDialogComponent } from '../_shared/singular-dialog/singular-dialog.component';
import { LoaderService } from '../_services/loader.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  title: string = 'OUR PARTNERS';

  partners: Partner[];

  constructor(public dialog: MatDialog, private partnerService: PartnerService, private loader: LoaderService) { }

  ngOnInit() {
    this.partnerService.getPartnersLocally().subscribe(partners => {
      this.partners = partners;
      this.loader.hide();
    });
  }

  viewMore(partner): void {
    const dialogRef = this.dialog.open(SingularDialogComponent, {
      data: {info: partner}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
