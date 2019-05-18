import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals.service';
import { Observable } from 'rxjs';
import { TitleText } from '../_models/default.model';
import { VolunteerPanel } from '../_models/volunteer.model';

@Injectable()
export class VolunteerService {

  constructor(private http: HttpClient) { }

  getVolunteerPanelsLocally(): Observable<VolunteerPanel[]> {
    var panels = this.http.get<VolunteerPanel[]>(`${globals.LOCAL_URL}/volunteer.panels.json`);
    return panels;
  }
  getUKPanelsLocally(): Observable<TitleText[]> {
    var panels = this.http.get<TitleText[]>(`${globals.LOCAL_URL}/uk.panels.json`);
    return panels;
  }

  getOverseasPanelsLocally(): Observable<TitleText[]> {
    var panels = this.http.get<TitleText[]>(`${globals.LOCAL_URL}/overseas.panels.json`);
    return panels;
  }

  getTestimonialPanelsLocally(): Observable<TitleText[]> {
    var panels = this.http.get<TitleText[]>(`${globals.LOCAL_URL}/testimonial.panels.json`);
    return panels;
  }
}