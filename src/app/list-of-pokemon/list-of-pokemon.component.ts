import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-of-pokemon',
  templateUrl: './list-of-pokemon.component.html',
  styleUrls: ['./list-of-pokemon.component.scss']
})
export class ListOfPokemonComponent implements OnInit {

  constructor() { }

  @Input() listOfPokemon: any
  @Output() displayDetails = new EventEmitter();

  ngOnInit(): void {
  }

  displayPokemonDetails(selectedPokemon: string) {
    this.displayDetails.emit(selectedPokemon)
  }
}
