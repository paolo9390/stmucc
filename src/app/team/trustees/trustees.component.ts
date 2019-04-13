import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../_services/team.service';
import { Trustee } from '../../_models/team.model';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { TrusteesDialogComponent } from './trustees-dialog/trustees-dialog.component';

@Component({
  selector: 'app-trustees',
  templateUrl: './trustees.component.html',
  styleUrls: ['./trustees.component.css']
})
export class TrusteesComponent implements OnInit {

  title: string = 'OUR TRUSTEES';
  trustees: Observable<Trustee[]>
  _trustees: Trustee[];
  trusteesSubscription : Subscription;

  constructor(private teamService: TeamService, public dialog: MatDialog) { }

  ngOnInit() {
    this.teamService.getTrustees().subscribe(trustees => {
      this._trustees = trustees;
    })
  }

  viewMore(trustee): void {
    const dialogRef = this.dialog.open(TrusteesDialogComponent, {
      width: '80%',
      data: {trustee: trustee}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
