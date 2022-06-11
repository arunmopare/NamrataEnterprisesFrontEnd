import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(ContactUsPopUp, {
      height: '90%',
      width: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}
@Component({
  selector: 'dialog-content-example-dialog',
  template: `
  <h2 mat-dialog-title>Contact Us</h2>
<mat-dialog-content  style="width:auto">
<app-contact-us></app-contact-us>
</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-button mat-dialog-close>Cancel</button>
</mat-dialog-actions>
  `,
})
export class ContactUsPopUp { }