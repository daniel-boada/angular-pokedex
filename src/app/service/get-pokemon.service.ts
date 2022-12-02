import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonService {

  constructor(private http: HttpClient) { }

  url = "https://pokeapi.co/api/v2/pokemon/";

  getPokemonDetails(pokemonName: any): Observable<any> {
    return this.http.get(`${this.url}${pokemonName}`);
  }

  getListOfPokemon(): Observable<any> {
    return this.http.get(this.url);
  }
}
