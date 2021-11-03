import { Component, OnInit } from '@angular/core';
import { ServisiService } from 'src/app/services/servisi.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public service: ServisiService) { }
  admin: boolean = false;
  student: boolean = false;
  profesor: boolean = false;
  userDetails: any;
  student_indeks: any;
  rokovi: any;
  notifikacije: any[] = [];
  notifObject = {
    predmet: '',
    dani: 1
  }
  ngOnInit(): void {

    let personFromStorage = JSON.parse(localStorage.getItem('user'));
    this.userDetails = personFromStorage[0];
    if(personFromStorage[0].rola == "admin"){
      this.admin = true;
    }
    if(personFromStorage[0].rola == "student"){
      this.student = true;
      this.service.fetchUser(personFromStorage[0].korisnik_id).subscribe(
        res=> {
          this.student_indeks = res[0].student_indeks;
    
          this.service.prikaziRokove(this.student_indeks).subscribe(
            res=> {
              this.rokovi = res as []
              console.log(this.rokovi)
              //this.rokovi = this.rokovi.filter(item => item.active == "yes");
              for(let i=0; i<this.rokovi.length; i++){
                //this.rokovi[i].datum_ispita = (moment(this.rokovi[i].datum_ispita)).format('DD MMM YYYY');
                this.rokovi[i].datum_otvaranja = (moment(this.rokovi[i].datum_otvaranja)).format('DD MMM YYYY');
                this.rokovi[i].datum_zatvaranja = (moment(this.rokovi[i].datum_zatvaranja)).format('DD MMM YYYY');
                var future = moment(this.rokovi[i].datum_ispita);
                var start = moment();
                var d = future.diff(start, 'days'); 
                if(d < 4 && d > 0){
                  this.notifObject.predmet = this.rokovi[i].predmet
                  this.notifObject.dani = d
                  this.notifikacije.push(this.notifObject)
                }
              }
              console.log(this.notifikacije)
            } 
          )
        }
      ) 
    }
    if(personFromStorage[0].rola == "profesor"){
      this.profesor = true;
    }
  }
  logout(){
    localStorage.clear();
    window.location.reload();
  }

}
