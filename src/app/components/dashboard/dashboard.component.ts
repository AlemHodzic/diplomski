import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  admin: boolean = false;
  student: boolean = false;
  profesor: boolean = false;
  ngOnInit(): void {
    let personFromStorage = JSON.parse(localStorage.getItem('user'));
    if(personFromStorage[0].rola == "admin"){
      this.admin = true;
    }
    if(personFromStorage[0].rola == "student"){
      this.student = true;
    }
    if(personFromStorage[0].rola == "profesor"){
      this.student = true;
    }
  }
  logout(){
    localStorage.clear();
    window.location.reload();
  }

}
