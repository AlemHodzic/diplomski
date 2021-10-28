import { Component, OnInit } from '@angular/core';
import { ServisiService } from 'src/app/services/servisi.service';
import {MatDialog} from '@angular/material/dialog';
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
        for(let i=0; i<this.rokovi.length; i++){
          this.rokovi[i].datum_otvaranja = this.rokovi[i].datum_otvaranja.toString().split('T')[0];
        }
        console.log(this.rokovi)
      } 
    )
  }
  openDialog(){
    //this.dialog.open(AddPredmetComponent);
  }
  
  openEdit(item){
    /*this.dialog.open(EditPredmetComponent, {
      data: {
        id: item
      }
    }); */
  }
  delete(item){
    const answer = window.confirm("Jeste li sigurni da zelite odabrani sadržaj izbrisati/prebaciti u arhivu?");
    if(answer){
      this.service.deletePredmet(item);
      setTimeout(() => {
        //location.reload();
      }, 500);
    }
  
  }
}
