import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { NameUrlDTO } from "src/app/interfaces/name-url-dto.interface";
import { PokemonMoveDTO } from "src/app/interfaces/pokemon-move-dto.interface";

import { PokemonsService } from "src/app/services/pokemons.service";
import { SpinnerService } from "src/app/services/spinner.service";

@Component({
  selector: "px-pokemon-detail-moves",
  templateUrl: "./pokemon-detail-moves.component.html",
  styleUrls: [
    "./pokemon-detail-moves.component.scss",
    "../pokemon-detail.component.scss",
  ],
})
export class PokemonDetailMovesComponent {
  @Input() pokemonMoves: NameUrlDTO[];

  selectedMove$: Observable<PokemonMoveDTO>;
  selectedMoveName: string;

  constructor(
    private spinnerService: SpinnerService,
    private pokemonsService: PokemonsService
  ) {}

  getMove(move: NameUrlDTO): void {
    this.spinnerService.showSpinner = true;

    this.selectedMove$ = this.pokemonsService
      .getMoveDetailRequest(move.url)
      .pipe(
        tap((response: PokemonMoveDTO) => {
          this.selectedMoveName = response.name;
          this.spinnerService.showSpinner = false;
        })
      );
  }
}
