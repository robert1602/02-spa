import { Component, OnInit } from '@angular/core'; // este es el archivo responsable de la pagina visualizada Heroes
import {HeroesService, Heroe} from '../../services/heroes.service';
import { Router } from '@angular/router'; 




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private  _HeroesService: HeroesService,
    private router:Router) { // importar mi servicio
    // console.log("construtor");    
  }

  ngOnInit() {

     this.heroes = this._HeroesService.getHeroes();
     console.log(this.heroes);
  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }

}
