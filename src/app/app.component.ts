import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  pokemons: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemons);
  }

  selectPokemon(pokemonId: string) {
    const id = +pokemonId;
    const pokemon: Pokemon|undefined = this.pokemons.find(pokemon => pokemon.id == +pokemonId);
    if(pokemon) {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez cliqué sur un pokémon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }
}
