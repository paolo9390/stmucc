import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals.service';
import { RegularDonation, DonationPanel } from '../_models/donation.model';
import { Observable } from 'rxjs';

@Injectable()
export class DonationService {
  regularDonations: Observable<RegularDonation[]>
  donationPanels: Observable<DonationPanel[]>

  constructor(private http: HttpClient) { }

  getRegularDonationsLocally(): Observable<RegularDonation[]> {
    var regularDonations = this.http.get<RegularDonation[]>(`${globals.LOCAL_URL}/regulardonations.json`);
    return regularDonations;
  }

  getDonationsPanelsLocally(): Observable<DonationPanel[]> {
    var donationPanels = this.http.get<DonationPanel[]>(`${globals.LOCAL_URL}/donations.panels.json`);
    return donationPanels;
  }
}