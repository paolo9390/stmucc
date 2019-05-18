import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-gold-card-terms-dialog',
  templateUrl: './terms-dialog.component.html',
  styleUrls: ['./terms-dialog.component.css']
})
export class TermsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TermsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
