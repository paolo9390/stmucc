import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-singular-dialog',
  templateUrl: './singular-dialog.component.html',
  styleUrls: ['./singular-dialog.component.css']
})
export class SingularDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SingularDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
