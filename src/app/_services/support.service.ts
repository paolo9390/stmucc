import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals.service';
import { SupportPanel } from '../_models/support.model';
import { Observable } from 'rxjs';
import { TitleText } from '../_models/default.model';

@Injectable()
export class SupportService {
  supportPanels: Observable<SupportPanel[]>

  constructor(private http: HttpClient) { }

  getSupportPanelsLocally(): Observable<SupportPanel[]> {
    var supportPanels = this.http.get<SupportPanel[]>(`${globals.LOCAL_URL}/supportpanels.json`);
    return supportPanels;
  }

  getCorporatePanelsLocally(): Observable<TitleText[]> {
    var panels = this.http.get<SupportPanel[]>(`${globals.LOCAL_URL}/corporatepanels.json`);
    return panels;
  }

  getGetInvolvedPanelsLocally(): Observable<TitleText[]> {
    var panels = this.http.get<SupportPanel[]>(`${globals.LOCAL_URL}/getinvolvedpanels.json`);
    return panels;
  }
}