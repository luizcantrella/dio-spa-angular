import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UserDetails {
  id: number,
  photUrl: string;
  name: string;
  emailPersonal: string;
  emailCompany?: string;
  created: Date,
  selected: boolean
}

@Component({
  selector: 'spa-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDetails) { }

  ngOnInit(): void {
  }

}
