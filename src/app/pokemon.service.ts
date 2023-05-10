import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Pokemon } from './Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string = "";
  private pokemon:Pokemon | any;

  constructor(private http:HttpClient){
    this.baseURL  = environment.pokeApi;
  }

  getPokemon(pokemonName:string):Observable<Pokemon>{
    this.pokemon = this.http.get<Pokemon>(`${this.baseURL}${pokemonName}`);
    return this.pokemon;
  }
}
