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

  constructor(public service: ServisiService, public dialog: MatDialog) { }
  rokovi: any;
  ngOnInit(): void {
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
}
