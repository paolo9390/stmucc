import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals.service';
import { TeamMember } from '../_models/team.model';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class TeamService {
  trustees: Observable<TeamMember[]>
  constructor(private http: HttpClient, private loader: LoaderService) { 
    this.loader.show();
  }

  getTrustees(): Observable<TeamMember[]> {
    var trustees =  this.http.get<TeamMember[]>(`${globals.BASE_URL}/team/trustees`);
    return trustees;
  }

  getTrusteesLocally(): Observable<TeamMember[]> {
    var trustees = this.http.get<TeamMember[]>(`${globals.LOCAL_URL}/trustees.json`);
    return trustees;
  }

  getStaffLocally(): Observable<TeamMember[]> {
    var staff = this.http.get<TeamMember[]>(`${globals.LOCAL_URL}/staff.json`);
    return staff;
  }
}