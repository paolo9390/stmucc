import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../_services/team.service';
import { TeamMember } from '../../_models/team.model';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { TeamDialogComponent } from '../team-dialog/team-dialog.component';

@Component({
  selector: 'app-trustees',
  templateUrl: './trustees.component.html',
  styleUrls: ['./trustees.component.css']
})
export class TrusteesComponent implements OnInit {

  title: string = 'OUR TRUSTEES';
  trustees: Observable<TeamMember[]>
  _trustees: TeamMember[];
  trusteesSubscription : Subscription;

  constructor(private teamService: TeamService, public dialog: MatDialog) { }

  ngOnInit() {
    this.teamService.getTrusteesLocally().subscribe(trustees => {
      this._trustees = trustees;
    })
  }

  viewMore(trustee): void {
    if (trustee && trustee.description !== ''){
      const dialogRef = this.dialog.open(TeamDialogComponent, {
        width: '80%',
        data: {team: trustee}
      });
  
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }

}
