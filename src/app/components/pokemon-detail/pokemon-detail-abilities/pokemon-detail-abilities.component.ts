import { Component, Input } from "@angular/core";
import { PokemonAbilityDTO } from "src/app/interfaces/pokemon-ability-dto.interface";


@Component({
  selector: "px-pokemon-detail-abilities",
  templateUrl: "./pokemon-detail-abilities.component.html",
  styleUrls: [
    "./pokemon-detail-abilities.component.scss",
    "../pokemon-detail.component.scss",
  ],
})
export class PokemonDetailAbilitiesComponent {
  @Input() pokemonAbilities: PokemonAbilityDTO[];

  constructor() {}

  getEnglishDescription(ability: PokemonAbilityDTO): string {
    const effect = ability.effect_entries.find(
      (item) => item.language.name === "en"
    );

    return effect.effect;
  }
}
