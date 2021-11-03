import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { ServisiService } from 'src/app/services/servisi.service';

@Component({
  selector: 'app-edit-ocjene',
  templateUrl: './edit-ocjene.component.html',
  styleUrls: ['./edit-ocjene.component.css']
})
export class EditOcjeneComponent implements OnInit {
  constructor(public service: ServisiService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }
  formdata: any;
  article: any

  ngOnInit(): void {
    this.formdata = new FormGroup({
      ocjena: new FormControl(""),
    
   });
   this.service.getOcjena(this.data.id).subscribe(
     res=> {
       this.article = res[0]
       this.formdata.get('ocjena').setValue(this.article.ocjena)
      
     }
   )
  }
  onClickSubmit(data) {
    data.idocjena = this.data.id;
    this.service.editOcjena(data);
  }

}
