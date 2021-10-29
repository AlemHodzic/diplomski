import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Studentska Sluzba';
  constructor() { }
  login: boolean = false;
  ngOnInit(): void {
    let personFromStorage = JSON.parse(localStorage.getItem('user'));
    if(personFromStorage.length == 0){
      this.login = false;
    }else{
      this.login = true;
    }
  }

}


