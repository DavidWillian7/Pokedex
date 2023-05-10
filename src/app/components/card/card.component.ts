import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  pokemonId: number = 1;
  pokemonName: string = "pikachu";
  photo: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
  types: string[] = ["fire", "normal"];
}
