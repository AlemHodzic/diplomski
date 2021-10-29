import { Component, OnInit } from '@angular/core';
import { ServisiService } from 'src/app/services/servisi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: ServisiService) { }

  ngOnInit(): void {
    let personFromStorage = JSON.parse(localStorage.getItem('user'));
    console.log(personFromStorage)
  }
  object = {
    email: '',
    pw: ''
  }
  userDetails: any;
  login(email, pw){
    this.object.email = email;
    this.object.pw = pw;
    console.log(this.object)
    this.service.loginUser(this.object).subscribe(
      res=> {
        this.userDetails = res;
        if(this.userDetails.length == 0){
          alert("Pogresna sifra ili email.")
        }else{
          localStorage.setItem('user', JSON.stringify(this.userDetails))
          window.location.reload();
        }
      }
    );
  }

}
