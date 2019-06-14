import { Component, OnInit } from '@angular/core';
import { PaypalService } from '../_services/paypal.service';
import { Router } from "@angular/router";
import { GoldCardService } from '../_services/goldcard.service';
import { MatDialog } from '@angular/material';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { SignUpDialogComponent } from './signup-dialog/signup-dialog.component';

@Component({
  selector: 'app-gold-card',
  templateUrl: './gold-card.component.html',
  styleUrls: ['./gold-card.component.css']
})
export class GoldCardComponent implements OnInit {
  perklist: object;
  title: string = 'Gold Card';
  heading: string;
  headline: string;
  subheadline: string;
  img: any;
  terms: any[];

  constructor(private paypalService: PaypalService, 
    private goldcardService: GoldCardService, 
    public dialog: MatDialog,
    private router: Router) {

    this.img = '/assets/img/shop/perks.png';
    this.heading = "Save Money Save Lives";
    this.headline = "Sign up today and receive a wide range of exclusive offers and perks for as little as £10 a month which will pay for life saving prescription medication for a patient in the Middle East.";
    this.subheadline = "When you join St Mark Gold Card, you will have access to exclusive perks throught our Partner Perkbox and more:";
    
    this.perklist = [
      {
        text: "Splash out with exclusive discounts on clothing, entertainment, meals out etc",
        icon: "local_mall"
      },
      {
        text: "Save hundreds of pounds every year on groceries and other daily essentials",
        icon: "local_grocery_store"
      },
      {
        text: "Discounted gym memberships over 3000 gyms across the UK",
        icon: "fitness_center"
      },
      {
        text: "15% off Westfield Health Healthcare insurance",
        icon: "local_pharmacy"
      }
    ]
   }

  ngOnInit() {
    this.goldcardService.getTsCsLocally().subscribe(terms => {
      this.terms = terms;
    })
  }

  pay(){
    this.paypalService.pay().subscribe(res => {
      window.location.href = res.redirectUrl;
      // this.router.navigate(['/externalRedirect', { externalUrl: res.redirectUrl }], {
      //   skipLocationChange: true,
      // });
    });
  }

  viewTerms(): void {
    const dialogRef = this.dialog.open(TermsDialogComponent, {
      width: '80%',
      data: {
        title: 'Terms & Conditions',
        terms: this.terms
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  signUp(): void {
    const dialogRef = this.dialog.open(SignUpDialogComponent, {
      panelClass: 'no-padding-dialog',
      data: {
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
