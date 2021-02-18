import { Component, Input } from "@angular/core";
import { PokemonDTO } from "src/app/interfaces/pokemon-dto.interface";
import { MyPokemonsService } from "src/app/services/my-pokemons.service";

@Component({
  selector: "px-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.scss"],
})
export class PokemonCardComponent {
  @Input() pokemon: PokemonDTO;

  constructor(public myPokemonService: MyPokemonsService) {}
}
