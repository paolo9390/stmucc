import { Component, OnInit } from '@angular/core';
import { DonationService } from '../_services/donation.service';
import { RegularDonation, DonationPanel } from '../_models/donation.model';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  title: string = 'YOUR DONATION';
  panelImg: string;
  selectedAmount: any;

  panels: DonationPanel[];

  fixedDonations: RegularDonation[];
  
  isOther: boolean = false;
  isSubmitted: boolean = false;
  donationAmount: number = 10;


  heartbeat: string = '/assets/img/about/donate_heart.jpg';

  constructor(private donationService: DonationService) { 
    this.panelImg = '/assets/img/heal.jpeg';
  }

  ngOnInit() {
    this.donationService.getDonationsPanelsLocally().subscribe(panels => {
      this.panels = panels;
    });

    this.donationService.getRegularDonationsLocally().subscribe(regularDonations => {
      this.fixedDonations = regularDonations;
      this.selectedAmount = regularDonations[0];
    });
  }

  onAmountSelect(donation){
    this.selectedAmount = donation;

    if (donation.amount === "Other"){
      this.isOther = true;
    } else {
      this.isOther = false;
      this.donationAmount = this.selectedAmount.value;
    }
  }

  submit(){
    if (this.isOther){
    } else {
      this.donationAmount = this.selectedAmount.value;
    }
    this.isSubmitted = true;
  }

  reset(){
    this.isSubmitted = false;
  }

  sendMail(){
    window.location.href = 'mailto:medhat.boutros@stmarkuniversalcoptscare.org?Subject=Become%20a%20regular%20supporter';
  }
}
