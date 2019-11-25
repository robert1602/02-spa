import { Component } from '@angular/core';
import {ActivatedRoute  } from '@angular/router'; 
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  Heroe:any={};
  // heroes: Heroe[] = [];
  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {
    
    this.activatedRoute.params.subscribe(params =>{
      this.Heroe = this._heroesService.getHeroe(params['id']);
    })
  }


}
