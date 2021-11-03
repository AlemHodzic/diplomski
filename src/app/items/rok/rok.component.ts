import { Component, OnInit } from '@angular/core';
import { ServisiService } from 'src/app/services/servisi.service';
import {MatDialog} from '@angular/material/dialog';
import * as moment from 'moment';
import { AddRokComponent } from 'src/app/components/rok/add-rok/add-rok.component';
import { EditRokComponent } from 'src/app/components/rok/edit-rok/edit-rok.component';
@Component({
  selector: 'app-rok',
  templateUrl: './rok.component.html',
  styleUrls: ['./rok.component.css']
})
export class RokComponent implements OnInit {
  admin: boolean = false;
  student: boolean = false;
  profesor: boolean = false;
  constructor(public service: ServisiService, public dialog: MatDialog) { }
  rokovi: any;
  ngOnInit(): void {
    let personFromStorage = JSON.parse(localStorage.getItem('user'));
    if(personFromStorage[0].rola == "admin"){
      this.admin = true;
    }
    if(personFromStorage[0].rola == "student"){
      this.student = true;
    }
    if(personFromStorage[0].rola == "profesor"){
      this.profesor = true;
    }
    this.service.getRokovi().subscribe(
      res=> {
        this.rokovi = res as []
        this.rokovi = this.rokovi.filter(item => item.active == "yes");
        console.log(this.rokovi)
        for(let i=0; i<this.rokovi.length; i++){
          this.rokovi[i].datum_ispita = (moment(this.rokovi[i].datum_ispita)).format('DD MMM YYYY');
          this.rokovi[i].datum_otvaranja = (moment(this.rokovi[i].datum_otvaranja)).format('DD MMM YYYY');
          this.rokovi[i].datum_zatvaranja = (moment(this.rokovi[i].datum_zatvaranja)).format('DD MMM YYYY');
        }
      } 
    )
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
    const answer = window.confirm("Jeste li sigurni da zelite odabrani sadržaj izbrisati/prebaciti u arhivu?");
    if(answer){
      this.service.deleteRok(item);
      setTimeout(() => {
        location.reload();
      }, 500);
    }
  }
  object = {
    student_indeks: 1,
    rok_id: 1
  }
  student_indeks: any;
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
}
