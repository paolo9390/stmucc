import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-trustees-dialog',
  templateUrl: './trustees-dialog.component.html',
  styleUrls: ['./trustees-dialog.component.css']
})
export class TrusteesDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TrusteesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
