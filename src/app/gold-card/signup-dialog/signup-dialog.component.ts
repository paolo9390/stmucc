import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-gold-card-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.css']
})
export class SignUpDialogComponent {
  
  donationAmount: number;
  donationSelected: boolean = false;
  
  constructor(
    public dialogRef: MatDialogRef<SignUpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSelectAmount(): void {
    this.donationSelected = true;
  }

  onSubmit() {
    if (this.donationAmount) {
      if (this.donationAmount == 10){
        window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=S845YMCTLBPKS`;
      } else if (this.donationAmount == 20){
        window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=STT88KVF47MUU`;
      } else if (this.donationAmount == 30){
        window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RA24KG5FA4EAN`;
      }
    }
  }

}
