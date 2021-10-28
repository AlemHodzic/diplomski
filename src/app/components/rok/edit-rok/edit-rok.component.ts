import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServisiService } from 'src/app/services/servisi.service';
import * as moment from 'moment';
@Component({
  selector: 'app-edit-rok',
  templateUrl: './edit-rok.component.html',
  styleUrls: ['./edit-rok.component.css']
})
export class EditRokComponent implements OnInit {

  constructor(public service: ServisiService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }


  formdata: any;
  rok: any
  predmeti: any;
  ngOnInit(): void {
    this.formdata = new FormGroup({
      datum_otvaranja: new FormControl(""),
      datum_zatvaranja:  new FormControl(""),
      datum_ispita:  new FormControl(""),
      br_ucionice: new FormControl(""),
      predmet_id:  new FormControl("")
   });
  this.service.getPredmeti().subscribe(
    res=> {
      this.predmeti = res as []
      this.predmeti = this.predmeti.filter(item => item.active == "yes");
    } 
  )

    this.service.getRok(this.data.id).subscribe(
      res=> {
        this.rok = res[0]
        this.rok.datum_otvaranja = (moment(this.rok.datum_otvaranja)).format('yyyy-MM-DD');
        this.rok.datum_zatvaranja = (moment(this.rok.datum_zatvaranja)).format('yyyy-MM-DD');
        this.rok.datum_ispita = (moment(this.rok.datum_ispita)).format('yyyy-MM-DD');
        this.formdata.get('datum_otvaranja').setValue(this.rok.datum_otvaranja)
        this.formdata.get('datum_zatvaranja').setValue(this.rok.datum_zatvaranja)
        this.formdata.get('datum_ispita').setValue(this.rok.datum_ispita)
        this.formdata.get('br_ucionice').setValue(this.rok.br_ucionice)
        this.formdata.get('predmet_id').setValue(1)


      }
    )

  }
  onClickSubmit(data) {
    data.rok_id = this.data.id;
    data.predmet_id = +data.predmet_id
    console.log(data);
    this.service.updateRok(data);
  }


}
