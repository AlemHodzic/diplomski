import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServisiService } from 'src/app/services/servisi.service';
import * as moment from 'moment';
@Component({
  selector: 'app-add-obavijest',
  templateUrl: './add-obavijest.component.html',
  styleUrls: ['./add-obavijest.component.css']
})
export class AddObavijestComponent implements OnInit {

  constructor(public service: ServisiService) { }
  formdata: any;
  ngOnInit(): void {
    this.formdata = new FormGroup({
      naslov: new FormControl(""),
      podnaslov: new FormControl(""),
      slika:  new FormControl(""),
      sadrzaj:  new FormControl("")
   });
  }
  onClickSubmit(data) {
    data.datum_kreiranja = new Date();
    data.datum_kreiranja = (moment(data.datum_kreiranja)).format('YYYY-MM-DD')
    console.log(data);
    this.service.addNovost(data);
  }

}
