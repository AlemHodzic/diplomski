import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServisiService } from 'src/app/services/servisi.service';

@Component({
  selector: 'app-aktuelnosti',
  templateUrl: './aktuelnosti.component.html',
  styleUrls: ['./aktuelnosti.component.css']
})
export class AktuelnostiComponent implements OnInit {

  constructor(public service: ServisiService, private router: Router) { }
  news: any[] = [];
  ngOnInit(): void {
    this.service.getAktuelnosti().subscribe(
      res=> {
        this.news = res as []
        console.log(this.news)
      }
    )
  }
  openArticle(id){
    console.log(id)
    this.router.navigate(['/obavijest', id])
    setTimeout(() => {
      window.location.reload();
    }, 100);
  
  }
  openAll(){
    this.router.navigate(['/aktuelnosti'])
  }

}
