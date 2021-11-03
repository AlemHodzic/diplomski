import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { AddObavijestComponent } from 'src/app/components/obavijest/add-obavijest/add-obavijest.component';
import { EditObavijestComponent } from 'src/app/components/obavijest/edit-obavijest/edit-obavijest.component';
import { ServisiService } from 'src/app/services/servisi.service';

@Component({
  selector: 'app-obavijesti',
  templateUrl: './obavijesti.component.html',
  styleUrls: ['./obavijesti.component.css']
})
export class ObavijestiComponent implements OnInit {
  filteredNews: any;
  constructor(public service: ServisiService, public dialog: MatDialog) { }
  admin: boolean = false;
  student: boolean = false;
  profesor: boolean = false;
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

    this.service.getNovosti().subscribe(
      res=> {
        this.filteredNews = res as [];
        console.log(this.filteredNews)
        for(let i=0; i<this.filteredNews.length; i++){
          this.filteredNews[i].datum_kreiranja = (moment(this.filteredNews[i].datum_kreiranja)).format('DD MMM YYYY');
        }
      }
    )
  }
  openDialog(){
    this.dialog.open(AddObavijestComponent)
  }
  openEdit(item){
    this.dialog.open(EditObavijestComponent, {
      data: {
        id: item
      }
    }); 
  }
  delete(object){
    console.log(object)
    this.service.deleteNovost(object);
  }

}
