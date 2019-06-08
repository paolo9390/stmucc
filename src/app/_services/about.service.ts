import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals.service';
import { Observable } from 'rxjs';
import { AboutPanel } from '../_models/about.model';
import { TitleTextPanel, DefaultPanel } from '../_models/default.model';

@Injectable()
export class AboutService {

  constructor(private http: HttpClient) { }

  getAboutPanelsLocally(): Observable<AboutPanel[]> {
    var panels = this.http.get<AboutPanel[]>(`${globals.LOCAL_URL}/about.panels.json`);
    return panels;
  }

  getWhoPanelsLocally(): Observable<TitleTextPanel[]> {
    var panels = this.http.get<TitleTextPanel[]>(`${globals.LOCAL_URL}/who.panels.json`);
    return panels;
  }

  getWhatPanelsLocally(): Observable<DefaultPanel[]> {
    var panels = this.http.get<DefaultPanel[]>(`${globals.LOCAL_URL}/what.panels.json`);
    return panels;
  }

  getWhyPanelsLocally(): Observable<TitleTextPanel[]> {
    var panels = this.http.get<TitleTextPanel[]>(`${globals.LOCAL_URL}/why.panels.json`);
    return panels;
  }

  getAnnualReportsLocally(): Observable<DefaultPanel[]> {
    var panels = this.http.get<DefaultPanel[]>(`${globals.LOCAL_URL}/reports.panels.json`);
    return panels;
  }
}