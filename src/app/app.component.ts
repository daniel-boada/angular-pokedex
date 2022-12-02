import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { PokemonDetails } from './interfaces/interfaces';
import { GetPokemonService } from './service/get-pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-test';

  constructor(
    private getPokemonService: GetPokemonService,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  listOfPokemon: PokemonDetails[] = [];
  displayDetailsToggle = false;
  selectedPokemon: number = 1;

  ngOnInit() {
    this.getListOfPokemon();
  }

  getListOfPokemon() {
    this.getPokemonService.getListOfPokemon().subscribe((data) => {
      data['results'].forEach((element: any) => {
        this.getPokemonService
          .getPokemonDetails(element['name'])
          .subscribe((pokemonData) => {
            const pokemonInfo: PokemonDetails = {
              dex: pokemonData['id'],
              name: pokemonData['name'],
              type: pokemonData['types'][0]['type']['name'],
              height: pokemonData['height'],
              weight: pokemonData['weight'],
              HP: pokemonData['stats'][0]['base_stat'],
              attack: pokemonData['stats'][1]['base_stat'],
              defense: pokemonData['stats'][2]['base_stat'],
              speed: pokemonData['stats'][5]['base_stat'],
              specialAttack: pokemonData['stats'][3]['base_stat'],
              specialDefense: pokemonData['stats'][4]['base_stat'],
              imageNormal: pokemonData['sprites']['front_default'],
              imageShiny: pokemonData['sprites']['front_shiny'],
            };
            this.listOfPokemon.push(pokemonInfo);
          });
      });
    });
  }

  getPokemonDetails(pokemonName: string) {
    this.getPokemonService.getPokemonDetails(pokemonName).subscribe((data) => {
      this.listOfPokemon = data;
    });
  }

  displayDetails(selectedPokemon: number) {
    this.displayDetailsToggle = true;
    this.selectedPokemon = selectedPokemon;
  }
}
