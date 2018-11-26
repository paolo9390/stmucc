import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as globals from './globals.service';
import { PaymentURL } from '../models/paypal.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class PaypalService {
  // payment: Observable<Payment>
  constructor(private http: HttpClient) { }

  pay(): Observable<PaymentURL> {
    var payment =  this.http.post<PaymentURL>(`${globals.BASE_URL}/paypal/pay`, {}, httpOptions);
    return payment;
  }

}