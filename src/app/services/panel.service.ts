import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals.service';
import { Panel } from '../models/panel.model';
import { Observable } from 'rxjs';

@Injectable()
export class PanelService {
  panels: Observable<Panel[]>
  constructor(private http: HttpClient) { }

  getPanels(): Observable<Panel[]> {
    var panels =  this.http.get<Panel[]>(`${globals.BASE_URL}/panels`);
    return panels;
  }
}