import { Component, Input } from "@angular/core";
import { PokemonStatDTO } from "src/app/interfaces/pokemon-stat-dto.interface";

@Component({
  selector: "px-pokemon-detail-stats",
  templateUrl: "./pokemon-detail-stats.component.html",
  styleUrls: [
    "./pokemon-detail-stats.component.scss",
    "../pokemon-detail.component.scss",
  ],
})
export class PokemonDetailStatsComponent {
  @Input() pokemonStats: PokemonStatDTO[];

  constructor() {}
}
