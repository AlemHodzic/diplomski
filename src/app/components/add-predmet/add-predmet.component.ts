import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServisiService } from 'src/app/services/servisi.service';

@Component({
  selector: 'app-add-predmet',
  templateUrl: './add-predmet.component.html',
  styleUrls: ['./add-predmet.component.css']
})
export class AddPredmetComponent implements OnInit {

  constructor(public service: ServisiService) { }
  formdata: any;
  profesori: any;
  odsjeci: any;
  godine: any;
  ngOnInit(): void {
    this.service.getProfesors().subscribe(
      res=> {
        this.profesori = res as []
        this.profesori = this.profesori.filter(item => item.active == "yes");
      } 
    )
    this.service.getGodine().subscribe(
      res=> {
        this.godine = res as []
      } 
    )
    this.service.getOdsjek().subscribe(
      res=> {
        this.odsjeci = res as []
      } 
    )
    this.formdata = new FormGroup({
      naziv: new FormControl(""),
      opis:  new FormControl(""),
      ECTS: new FormControl(""),
      odsjek_id:  new FormControl(""),
      profesor_id: new FormControl(""),
      godina_studija: new FormControl("")
   });
  }
  onClickSubmit(data) {
    data.godina_studija = +data.godina_studija
    data.odsjek_id = +data.odsjek_id
    data.profesor_id = +data.profesor_id
    console.log(data);
    this.service.addPredmet(data);
  }
  selectChangeHandler(event){
      console.log(event.target.value);
    
  }

}
