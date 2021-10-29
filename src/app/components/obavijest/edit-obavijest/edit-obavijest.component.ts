import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { ServisiService } from 'src/app/services/servisi.service';

@Component({
  selector: 'app-edit-obavijest',
  templateUrl: './edit-obavijest.component.html',
  styleUrls: ['./edit-obavijest.component.css']
})
export class EditObavijestComponent implements OnInit {

  constructor(public service: ServisiService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }
  formdata: any;
  article: any
  ngOnInit(): void {
    this.formdata = new FormGroup({
      naslov: new FormControl(""),
      podnaslov: new FormControl(""),
      slika:  new FormControl(""),
      sadrzaj:  new FormControl("")
   });
   this.service.getNovost(this.data.id).subscribe(
     res=> {
       this.article = res[0]
       this.formdata.get('naslov').setValue(this.article.naslov)
       this.formdata.get('podnaslov').setValue(this.article.podnaslov)
       this.formdata.get('slika').setValue(this.article.slika)
       this.formdata.get('sadrzaj').setValue(this.article.sadrzaj)
     }
   )
  }
  onClickSubmit(data) {
    data.datum_kreiranja = new Date();
    data.datum_kreiranja = (moment(data.datum_kreiranja)).format('YYYY-MM-DD')
    this.service.addNovost(data);
  }
}
