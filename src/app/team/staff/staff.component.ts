import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../_services/team.service';
import { TeamMember } from '../../_models/team.model';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { TeamDialogComponent } from '../team-dialog/team-dialog.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  title: string = 'OUR TEAM';
  staff: Observable<TeamMember[]>
  _staff: TeamMember[];
  staffSubscription : Subscription;

  constructor(private teamService: TeamService, public dialog: MatDialog) { }

  ngOnInit() {
    this.teamService.getStaffLocally().subscribe(staff => {
      this._staff = staff;
    })
  }

  viewMore(staff): void {
    if (staff && staff.description !== ''){
      const dialogRef = this.dialog.open(TeamDialogComponent, {
        width: '80%',
        data: {team: staff}
      });
  
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }

}
