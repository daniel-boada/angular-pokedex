import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { PokemonDetails } from '../interfaces/interfaces';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  constructor() {}

  @Input() listOfPokemon: PokemonDetails[] = [];
  @Input() selectedPokemon: number = 0;
  @Output() backNavigation = new EventEmitter();

  pokemonDetails?: PokemonDetails = {};
  previousPokemon?: PokemonDetails = {};
  nextPokemon?: PokemonDetails = {};

  currentDex: number = 0;

  ngOnInit(): void {
    this.changeDisplayedPokemon(this.selectedPokemon);
  }

  changeDisplayedPokemon(dexNumber: number) {
    this.pokemonDetails = this.listOfPokemon.find((element) => element.dex === dexNumber);
    this.previousPokemon = this.listOfPokemon.find((element) => element.dex === dexNumber - 1);
    this.nextPokemon = this.listOfPokemon.find((element) => element.dex === dexNumber + 1);

    this.currentDex = this.pokemonDetails?.dex ?? 0;
    console.log(this.pokemonDetails);
  }

  onBack() {
    this.backNavigation.emit();
  }
}
