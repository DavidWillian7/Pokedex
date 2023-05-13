import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Pokemon } from './Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL: string = "";

  constructor(private http:HttpClient){
    this.baseURL  = environment.pokeApi;
  }

  getPokemon(id: string = "1"):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.baseURL}/${id}/`);
  }
}
