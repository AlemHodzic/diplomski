import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ServisiService } from 'src/app/services/servisi.service';

@Component({
  selector: 'app-single-novost',
  templateUrl: './single-novost.component.html',
  styleUrls: ['./single-novost.component.css']
})
export class SingleNovostComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute, private service: ServisiService, private router: Router) { }

  id: any;
  object: any;
  dateCreated: any;
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 

  });

  this.service.getNovost(this.id).subscribe(
    res => {
      this.object = res[0];
      this.object.datum_kreiranja = (moment(this.object.datum_kreiranja)).format('DD MMM YYYY');
    }
  ); 


  }

}
