import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals.service';
import { Trustee } from '../models/team.model';
import { Observable } from 'rxjs';

@Injectable()
export class TeamService {
  trustees: Observable<Trustee[]>
  constructor(private http: HttpClient) { }

  getTrustees(): Observable<Trustee[]> {
    var trustees =  this.http.get<Trustee[]>(`${globals.BASE_URL}/team/trustees`);
    return trustees;
  }
}