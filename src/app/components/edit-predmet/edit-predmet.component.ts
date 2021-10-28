import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServisiService } from 'src/app/services/servisi.service';
@Component({
  selector: 'app-edit-predmet',
  templateUrl: './edit-predmet.component.html',
  styleUrls: ['./edit-predmet.component.css']
})
export class EditPredmetComponent implements OnInit {

  constructor(public service: ServisiService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }
  formdata: any;
  profesori: any;
  odsjeci: any;
  godine: any;
  predmet: any
  ngOnInit(): void {
    this.formdata = new FormGroup({
      naziv: new FormControl(""),
      opis:  new FormControl(""),
      ECTS: new FormControl(""),
      odsjek_id:  new FormControl(""),
      profesor_id: new FormControl(""),
      godina_studija: new FormControl("")
   });
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
    this.service.getPredmet(this.data.id).subscribe(
      res=> {
        this.predmet = res[0]
        this.formdata.get('naziv').setValue(this.predmet.naziv)
        this.formdata.get('opis').setValue(this.predmet.opis)
        this.formdata.get('ECTS').setValue(this.predmet.ECTS)
        this.formdata.get('odsjek_id').setValue(1)
        this.formdata.get('profesor_id').setValue(1)
        this.formdata.get('godina_studija').setValue(1)

      }
    )

  }
  onClickSubmit(data) {
    data.godina_studija = +data.godina_studija
    data.odsjek_id = +data.odsjek_id
    data.profesor_id = +data.profesor_id
    data.predmet_id = this.data.id;
    console.log(data)
    this.service.updatePredmet(data);
  }

}
