import { Component, OnInit } from "@angular/core";
import { Hero } from '../hero';
 

import { HeroService } from '../hero.service';

@Component({
    selector :'app-hereos-dashboad',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{

    heroes:Hero[]=[];

    constructor(private heroService:  HeroService) { 
    }

  getHeroes():void{
    this.heroService.getHeroes().
      subscribe(heores => this.heroes=heores);
  }

    ngOnInit(): void {
        
    }

}