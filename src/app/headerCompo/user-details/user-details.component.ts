import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/login/login/login.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  
  public username: string =  'Admin';
  public Designation : string = localStorage.getItem('userName');
  public email : string = 'manjunathramesh@gmail.com';
  public registration : Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
