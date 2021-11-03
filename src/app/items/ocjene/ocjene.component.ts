import { Component, OnInit } from '@angular/core';
import { ServisiService } from 'src/app/services/servisi.service';
import {MatDialog} from '@angular/material/dialog';
import { EditOcjeneComponent } from 'src/app/components/ocjene/edit-ocjene/edit-ocjene.component';
@Component({
  selector: 'app-ocjene',
  templateUrl: './ocjene.component.html',
  styleUrls: ['./ocjene.component.css']
})
export class OcjeneComponent implements OnInit {


  constructor(public service: ServisiService, public dialog: MatDialog) { }
  admin: boolean = false;
  student: boolean = false;
  profesor: boolean = false;
  ocjene: any;
  student_indeks: any;
  ngOnInit(): void {
    let personFromStorage = JSON.parse(localStorage.getItem('user'));
    if(personFromStorage[0].rola == "student"){
      this.student = true;
      this.service.fetchUser(personFromStorage[0].korisnik_id).subscribe(
        res=> {
          this.student_indeks = res[0].student_indeks;
          this.service.getOcjene().subscribe(
            res=> {
              this.ocjene = res as []
              this.ocjene = this.ocjene.filter(item => item.student_indeks == this.student_indeks);
       
    
            } 
          )
        }
      )


    }else{
      this.service.getOcjene().subscribe(
        res=> {
          this.ocjene = res as []
          console.log(this.ocjene)
        } 
      )
    }
    if(personFromStorage[0].rola == "profesor"){
      this.profesor = true;
    }
    if(personFromStorage[0].rola == "admin"){
      this.admin = true;
    }

  }

  
  openEdit(item){
    console.log(item);
    this.dialog.open(EditOcjeneComponent, {
      data: {
        id: item
      }
    }); 
  }
  delete(item){
    const answer = window.confirm("Jeste li sigurni da zelite odabrani sadržaj izbrisati/prebaciti u arhivu?");
    if(answer){
      this.service.deletePredmet(item);
      setTimeout(() => {
        location.reload();
      }, 500);
    }
  
  }

}
