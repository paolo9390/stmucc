import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals.service';
import { Observable } from 'rxjs';

@Injectable()
export class GoldCardService {

  constructor(private http: HttpClient) { }

  getTsCsLocally(): Observable<any[]> {
    var tscs = this.http.get<any[]>(`${globals.LOCAL_URL}/goldcard.terms.json`);
    return tscs;
  }
}