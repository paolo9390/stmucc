import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals.service';
import { Panel } from '../_models/panel.model';
import { Observable } from 'rxjs';
import { Footer } from '../_models/footer.model';

@Injectable()
export class AppService {
  panels: Observable<Panel[]>

  constructor(private http: HttpClient) { }

  getHomePanels(): Observable<Panel[]> {
    var panels =  this.http.get<Panel[]>(`${globals.BASE_URL}/panels`);
    return panels;
  }

  getHomePanelsLocally(): Observable<Panel[]> {
    var panels = this.http.get<Panel[]>(`${globals.LOCAL_URL}/home.panels.json`);
    return panels;
  }

  getFooterLocally(): Observable<Footer[]> {
    var footer = this.http.get<Footer[]>(`${globals.LOCAL_URL}/footer.details.json`);
    return footer;
  }
}