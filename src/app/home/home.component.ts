import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserNewComponent } from '../user-new/user-new.component';

export interface UserDetails {
  id: number
  photUrl: string
  name: string
  emailPersonal: string
  emailCompany?: string
  created: Date
  selected: boolean
}

const ELEMENT_DATA: UserDetails[] = [
  {
    id: 1,
    name: 'John',
    photUrl: 'https://thispersondoesnotexist.com/image',
    emailPersonal: 'example@example.com',
    emailCompany: 'example@example.com',
    created: new Date,
    selected: false
  },
  {
    id: 2,
    name: 'Leblon James',
    photUrl: 'https://thispersondoesnotexist.com/image',
    emailPersonal: 'example@example.com',
    emailCompany: 'example@example.com',
    created: new Date,
    selected: false
  },
  {
    id: 3,
    name: 'Robison',
    photUrl: 'https://thispersondoesnotexist.com/image',
    emailPersonal: 'example@example.com',
    emailCompany: 'example@example.com',
    created: new Date,
    selected: false
  },
];

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dados: UserDetails[] = ELEMENT_DATA;

  displayedColumns: string[] = ['details','actions']

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  edit(id: number) :void {
    console.log(id);
  }

  remove(id: number) :void {
    this.dados = this.dados.filter(dado => dado.id != id);
  }

  openDialog() :void {
    const dialogRef = this.dialog.open(UserNewComponent, {
      width: '250px',
      data:  {
        id: this.dados.length,
        photUrl: 'https://thispersondoesnotexist.com/image',
        name: '',
        emailPersonal: '',
        emailCompany: '',
        created: new Date(),
        selected: false
      } as UserDetails
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
