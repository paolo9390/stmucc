import { Component, OnInit } from '@angular/core';
import { DonationService } from '../_services/donation.service';
import { RegularDonation, DonationPanel } from '../_models/donation.model';
import { LoaderService } from '../_services/loader.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  title: string = 'YOUR DONATION';
  panelImg: string = '/assets/img/heal.jpeg';
  donateImg: string = '/assets/img/donate.jpg';
  donate2: string = '/assets/img/donate2.jpg';
  selectedAmount: any;

  panels: DonationPanel[];

  fixedDonations: RegularDonation[];
  
  isOther: boolean = false;
  isSubmitted: boolean = false;

  donationAmount: number = 10;
  donationType: string = 'single';

  donationformPdf: string = '/assets/pdf/donation-form.pdf';


  constructor(private donationService: DonationService,
    private loader: LoaderService,
    private meta: Meta) {
  }

  ngOnInit() {
    this.donationService.getDonationsPanelsLocally().subscribe(panels => {
      this.panels = panels;
      this.loader.hide();
    });

    this.donationService.getRegularDonationsLocally().subscribe(regularDonations => {
      this.fixedDonations = regularDonations;
      this.selectedAmount = regularDonations[0];
      this.loader.hide();
    });

    this.addMetaTags();
  }

  addMetaTags(): void {
    this.meta.addTag({ property: 'og:title', content: 'StMUC - Donate' });
    this.meta.addTag({ property: 'og:url', content: 'https://stmarkuniversalcare.org/support/donate' });
    this.meta.addTag({ property: 'og:description', content: 'Donate to St Mark Universal Care with a one-off donation or by becoming an ongoing supporter of our many life-saving/life-changing initiatives.' });
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
    window.location.href = 'mailto:ashley.williams@stmarkuniversalcare.org?Subject=Become%20a%20regular%20supporter';
  }


  onSubmit() {
    if (this.selectedAmount.value) {
      if (this.donationType){

        if (this.donationType === 'monthly'){
          window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick-subscriptions&business=NDU9BDRHXRYQN&a3=${this.donationAmount}&t3=M&p3=1&currency_code=GBP&item_name=Donation&sra=1&src=1&amount=${this.donationAmount}`;
        }
        else if (this.donationType === 'single'){
          if (this.selectedAmount.value == 10){
            window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DTAHPYPGG2YTC&source=url`;
          } else if (this.selectedAmount.value == 25){
            window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4QRLPCAK5K6KG&source=url`;
          } else if (this.selectedAmount.value == 50){
            window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NCLRG4Q7DYVA8&source=url`;
          } else if (this.selectedAmount.value == 100){
            window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HZYHNEXLR236C&source=url`;
          } else if (this.selectedAmount.value == 500){
            window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K7H6VNB7HFH6U&source=url`;
          } else if (this.selectedAmount.value == -1){
            window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=NDU9BDRHXRYQN&item_name=Donation&currency_code=GBP&amount=${this.donationAmount}`;
          }
        }
        
      }
      
    }
  }
}
