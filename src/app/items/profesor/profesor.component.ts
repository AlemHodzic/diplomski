import { Component, OnInit } from '@angular/core';
import { ServisiService } from 'src/app/services/servisi.service';
import {MatDialog} from '@angular/material/dialog';
import { AddProfesorComponent } from 'src/app/components/add-profesor/add-profesor.component';
import { EditProfesorComponent } from 'src/app/components/edit-profesor/edit-profesor.component';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  constructor(public service: ServisiService, public dialog: MatDialog) { }
  profesori: any;
  ngOnInit(): void {
    this.service.getProfesors().subscribe(
      res=> {
        this.profesori = res as []
        this.profesori = this.profesori.filter(item => item.active == "yes");
      } 
    )
  }
  openDialog(){
    this.dialog.open(AddProfesorComponent);
  }
  
  openEdit(item){
    this.dialog.open(EditProfesorComponent, {
      data: {
        id: item
      }
    });
  }
  delete(item){
    const answer = window.confirm("Jeste li sigurni da zelite odabrani sadržaj izbrisati/prebaciti u arhivu?");
    if(answer){
      this.service.deleteProfesor(item);
      setTimeout(() => {
        location.reload();
      }, 500);
    }
  
  }

}
