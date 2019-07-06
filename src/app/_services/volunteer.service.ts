import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals.service';
import { Observable } from 'rxjs';
import { TitleTextPanel, DefaultPanel } from '../_models/default.model';
import { VolunteerPanel } from '../_models/volunteer.model';
import { LoaderService } from './loader.service';

@Injectable()
export class VolunteerService {

  constructor(private http: HttpClient, private loader: LoaderService) {
    this.loader.show();
   }

  getVolunteerPanelsLocally(): Observable<VolunteerPanel[]> {
    var panels = this.http.get<VolunteerPanel[]>(`${globals.LOCAL_URL}/volunteer.panels.json`);
    return panels;
  }
  
  getUKPanelsLocally(): Observable<DefaultPanel[]> {
    var panels = this.http.get<DefaultPanel[]>(`${globals.LOCAL_URL}/uk.panels.json`);
    return panels;
  }

  getOverseasPanelsLocally(): Observable<TitleTextPanel[]> {
    var panels = this.http.get<TitleTextPanel[]>(`${globals.LOCAL_URL}/overseas.panels.json`);
    return panels;
  }

  getTestimonialPanelsLocally(): Observable<DefaultPanel[]> {
    var panels = this.http.get<DefaultPanel[]>(`${globals.LOCAL_URL}/testimonial.panels.json`);
    return panels;
  }
}