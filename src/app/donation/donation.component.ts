import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  title: string = 'YOUR DONATION';
  panelImg: string;
  selectedAmount: any;

  panels: any[] = [
    {
      title: "",
      text: "Donate to St Mark Universal Copts Care with a one-off donation or by becoming an ongoing supporter of our many life-saving/life-changing initiatives."
    },
    {
      title: "",
      text: "100% of the donations you give to St Mark Universal Copts Care go directly to funding our programmes and vital work.  Unlike some charitable organisations, we do not use donations for administration costs or other overheads.  What you donate gets to where it’s needed, and every pound makes an impact."
    }
  ]

  fixedDonations: any[] = [
    {
      value: 10,
      amount: "£10",
      description: "covers one month's prescription cost for a diabetic patient"
    },
    {
      value: 25,
      amount: "£25",
      description: "covers one month's prescription cost for a heart disease patient"
    },
    {
      value: 50,
      amount: "£50",
      description: "covers one month's prescription cost for a kidney failure patient"
    },
    {
      value: 100,
      amount: "£100",
      description: "covers one surgery's cost"
    },
    {
      value: 500,
      amount: "£500",
      description: "will buy an electric hospital bed"
    },
    {
      value: 0,
      amount: "Other",
      description: "Other amount"
    }
  ];
  
  isOther: boolean = false;
  isSubmitted: boolean = false;
  donationAmount: number = 10;


  heartbeat: string = '/assets/img/about/donate_heart.jpg';

  constructor() { 
    this.panelImg = '/assets/img/heal.jpeg';
  }

  ngOnInit() {
    this.selectedAmount = this.fixedDonations[0];
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
}
