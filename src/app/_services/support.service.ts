import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals.service';
import { SupportPanel } from '../_models/support.model';
import { Observable } from 'rxjs';
import { TitleTextPanel } from '../_models/default.model';

@Injectable()
export class SupportService {
  supportPanels: Observable<SupportPanel[]>

  constructor(private http: HttpClient) { }

  getSupportPanelsLocally(): Observable<SupportPanel[]> {
    var supportPanels = this.http.get<SupportPanel[]>(`${globals.LOCAL_URL}/support.panels.json`);
    return supportPanels;
  }

  getCorporatePanelsLocally(): Observable<TitleTextPanel[]> {
    var panels = this.http.get<SupportPanel[]>(`${globals.LOCAL_URL}/corporate.panels.json`);
    return panels;
  }

  getGetInvolvedPanelsLocally(): Observable<TitleTextPanel[]> {
    var panels = this.http.get<SupportPanel[]>(`${globals.LOCAL_URL}/getinvolved.panels.json`);
    return panels;
  }
}