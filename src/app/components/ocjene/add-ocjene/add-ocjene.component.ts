import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { ServisiService } from 'src/app/services/servisi.service';
@Component({
  selector: 'app-add-ocjene',
  templateUrl: './add-ocjene.component.html',
  styleUrls: ['./add-ocjene.component.css']
})
export class AddOcjeneComponent implements OnInit {

  constructor(public service: ServisiService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }
  formdata: any;
  article: any

  ngOnInit(): void {
    console.log(this.data.id)
    this.formdata = new FormGroup({
      ocjena: new FormControl(""),
    
   });

  }
  onClickSubmit(data) {
    data.rok_id = this.data.id.rok_id
    data.student_indeks = this.data.id.student_indeks
    data.predmet_id = this.data.id.predmet_id
    this.service.unesiOcjenu(data);
    this.service.odjaviIspit(this.data.id);
  }

}
