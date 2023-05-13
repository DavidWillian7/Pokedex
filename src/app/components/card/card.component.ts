import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/Pokemon';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  idPokemon?: string;

  pokemon?: Pokemon;
  cardColor: string = "";

  constructor(private service: PokemonService){}

  ngOnInit() {
    this.getPokemonApi();
  }

  getPokemonApi(){
    if(this.idPokemon){
      this.service.getPokemon(this.idPokemon).subscribe(data => {
        this.pokemon = data;
        this.cardColor = data.types[0].type.name;
      });
    }
  }
}
