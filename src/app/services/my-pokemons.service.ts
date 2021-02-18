import { Injectable } from "@angular/core"

import { PokemonDTO } from "../interfaces/pokemon-dto.interface";

@Injectable({
  providedIn: "root",
})
export class MyPokemonsService {
  myPokemons: PokemonDTO[] = [];
  isMyPokemonPage: boolean = false;

  constructor() {}

  savePokemon(pokemon: PokemonDTO): void {
    this.myPokemons.push(pokemon);
    this.myPokemons = this.myPokemons.sort((a, b) => (a.id > b.id ? 1 : -1));
  }

  removePokemon(pokemon: PokemonDTO): void {
    this.myPokemons = this.myPokemons.filter(
      (myPokemon) => myPokemon.id !== pokemon.id
    );
  }

  checkIsMyPokemon(pokemon: PokemonDTO): boolean {
    return !!this.myPokemons.find((myPokemon) => myPokemon.id === pokemon.id);
  }
}
