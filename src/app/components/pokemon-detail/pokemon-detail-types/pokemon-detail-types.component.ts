import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { SpinnerService } from "src/app/services/spinner.service";

import { PokemonTypeDTO } from "src/app/interfaces/pokemon-type-dto.interface";

@Component({
  selector: "px-pokemon-detail-types",
  templateUrl: "./pokemon-detail-types.component.html",
  styleUrls: [
    "./pokemon-detail-types.component.scss",
    "../pokemon-detail.component.scss",
  ],
})
export class PokemonDetailTypesComponent {
  @Input() pokemonTypes: PokemonTypeDTO[];
}
