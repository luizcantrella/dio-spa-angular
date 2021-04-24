import { Component, Input, OnInit } from '@angular/core';

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
  selector: 'spa-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  details: UserDetails

  constructor() { }

  ngOnInit(): void {
  }

}
