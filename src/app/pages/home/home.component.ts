import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  idsPokemon: number[] = [];
  offset: number = 0;
  limit: number = 10;

  constructor(){
    this.setIntervalPokemons(this.offset, this.limit);
  }

  setIntervalPokemons(offset: number, limit: number){
    for(let i = offset; i < limit; i++){
      this.idsPokemon.push(i + 1);
    }
    this.offset = this.limit;
    this.limit += 10;
  }

  loadMore(){
    this.setIntervalPokemons(this.offset, this.limit);
    console.log(this.idsPokemon);
  }
}
