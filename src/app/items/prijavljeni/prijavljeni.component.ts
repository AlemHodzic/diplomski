import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { AddOcjeneComponent } from 'src/app/components/ocjene/add-ocjene/add-ocjene.component';
import { AddRokComponent } from 'src/app/components/rok/add-rok/add-rok.component';
import { EditRokComponent } from 'src/app/components/rok/edit-rok/edit-rok.component';
import { ServisiService } from 'src/app/services/servisi.service';

@Component({
  selector: 'app-prijavljeni',
  templateUrl: './prijavljeni.component.html',
  styleUrls: ['./prijavljeni.component.css']
})
export class PrijavljeniComponent implements OnInit {

  constructor(public service: ServisiService, public dialog: MatDialog) { }
  admin: boolean = false;
  student: boolean = false;
  profesor: boolean = false;
  rokovi: any;
  student_indeks: any;
  ngOnInit(): void {
    let personFromStorage = JSON.parse(localStorage.getItem('user'));
  
    if(personFromStorage[0].rola == "admin"){
      this.admin = true;
    }
    if(personFromStorage[0].rola == "student"){
      this.service.fetchUser(personFromStorage[0].korisnik_id).subscribe(
        res=> {
          this.student_indeks = res[0].student_indeks;
    
          this.service.prikaziRokove(this.student_indeks).subscribe(
            res=> {
              this.rokovi = res as []
              console.log(this.rokovi)
              //this.rokovi = this.rokovi.filter(item => item.active == "yes");
              for(let i=0; i<this.rokovi.length; i++){
                this.rokovi[i].datum_ispita = (moment(this.rokovi[i].datum_ispita)).format('DD MMM YYYY');
                this.rokovi[i].datum_otvaranja = (moment(this.rokovi[i].datum_otvaranja)).format('DD MMM YYYY');
                this.rokovi[i].datum_zatvaranja = (moment(this.rokovi[i].datum_zatvaranja)).format('DD MMM YYYY');
              }
            } 
          )
        }
      ) 
      this.student = true;
    }else{
      this.service.prikaziSveRokove().subscribe(
        res=> {
          this.rokovi = res as []
          console.log(this.rokovi)
          //this.rokovi = this.rokovi.filter(item => item.active == "yes");
          for(let i=0; i<this.rokovi.length; i++){
            this.rokovi[i].datum_ispita = (moment(this.rokovi[i].datum_ispita)).format('DD MMM YYYY');
            this.rokovi[i].datum_otvaranja = (moment(this.rokovi[i].datum_otvaranja)).format('DD MMM YYYY');
            this.rokovi[i].datum_zatvaranja = (moment(this.rokovi[i].datum_zatvaranja)).format('DD MMM YYYY');
          }
        }
      )
    }
    if(personFromStorage[0].rola == "profesor"){
      this.profesor = true;
    }


 

  }
  openDialog(){
    this.dialog.open(AddRokComponent);
  }
  
  openEdit(item){
    this.dialog.open(EditRokComponent, {
      data: {
        id: item
      }
    }); 
  }
  delete(item){
    console.log(item)
    const answer = window.confirm("Jeste li sigurni da zelite odjaviti ispit?");
    if(answer){
      this.service.odjaviIspit(item);
      setTimeout(() => {
        location.reload();
      }, 500);
    }
  }
  object = {
    student_indeks: 1,
    rok_id: 1
  }

  prijavi(rok){

    let personFromStorage = JSON.parse(localStorage.getItem('user'));
    console.log(personFromStorage)
    this.service.fetchUser(personFromStorage[0].korisnik_id).subscribe(
      res=> {
        this.student_indeks = res[0].student_indeks;
        this.object.rok_id = rok.rok_id
        this.object.student_indeks = this.student_indeks
        this.drugaFunkcija(this.object);
      }
    ) 
  }
  drugaFunkcija(object){
    this.service.prijaviRok(object)
  }
  ocjeni(item){
    this.dialog.open(AddOcjeneComponent, {
      data: {
        id: item
      }
    });
  }
}
