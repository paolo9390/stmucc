import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals.service';
import { Partner } from '../_models/partner.model';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class PartnerService {
  partners: Observable<Partner[]>

  constructor(private http: HttpClient, private loader: LoaderService) {
    this.loader.show();
   }

  getPartners(): Observable<Partner[]> {
    var partners =  this.http.get<Partner[]>(`${globals.BASE_URL}/partners`);
    return partners;
  }

  getPartnersLocally(): Observable<Partner[]> {
    var partners = this.http.get<Partner[]>(`${globals.LOCAL_URL}/partners.json`);
    return partners;
  }
}