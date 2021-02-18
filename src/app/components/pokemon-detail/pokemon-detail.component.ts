import { Component, Inject, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { SpinnerService } from "src/app/services/spinner.service";

import { PokemonDTO } from "src/app/interfaces/pokemon-dto.interface";

import { PokemonsService } from "src/app/services/pokemons.service";
import { PokemonsListComponent } from "../pokemons-list/pokemons-list.component";
import { MyPokemonsService } from "src/app/services/my-pokemons.service";

@Component({
  selector: "px-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"],
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: PokemonDTO;

  pokemonData$: Observable<any>;

  pokemonDetails: boolean = false;

  constructor(
    private spinnerService: SpinnerService,
    private pokemonsService: PokemonsService,
    public myPokemonService: MyPokemonsService,
    @Inject(PokemonsListComponent)
    private pokemonsListComponent: PokemonsListComponent
  ) {}

  ngOnInit(): void {
    this.getPokemonDetailData();
  }

  getPokemonDetailData(): void {
    this.spinnerService.showSpinner = true;

    this.pokemonData$ = this.pokemonsService
      .getPokemonDataRequest(this.pokemon)
      .pipe(
        tap((response) => {
          this.spinnerService.showSpinner = false;
        })
      );
  }

  removeFromMyPokemon(pokemon: PokemonDTO): void {
    this.myPokemonService.removePokemon(pokemon);
    this.pokemonsListComponent.selectedPokemon = undefined;

    if (this.myPokemonService.isMyPokemonPage) {
      this.pokemonsListComponent.pokemons = this.myPokemonService.myPokemons;
    }
  }
}
