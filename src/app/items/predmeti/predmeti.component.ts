import { Component, OnInit } from '@angular/core';
import { ServisiService } from 'src/app/services/servisi.service';
import {MatDialog} from '@angular/material/dialog';
import { AddPredmetComponent } from 'src/app/components/add-predmet/add-predmet.component';
import { EditPredmetComponent } from 'src/app/components/edit-predmet/edit-predmet.component';

@Component({
  selector: 'app-predmeti',
  templateUrl: './predmeti.component.html',
  styleUrls: ['./predmeti.component.css']
})
export class PredmetiComponent implements OnInit {

  constructor(public service: ServisiService, public dialog: MatDialog) { }

  predmeti: any;
  ngOnInit(): void {
    this.service.getPredmeti().subscribe(
      res=> {
        this.predmeti = res as []
        this.predmeti = this.predmeti.filter(item => item.active == "yes");
        console.log(this.predmeti)
      } 
    )
  }
  openDialog(){
    this.dialog.open(AddPredmetComponent);
  }
  
  openEdit(item){
    this.dialog.open(EditPredmetComponent, {
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
