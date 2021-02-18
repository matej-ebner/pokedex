import { NameUrlDTO } from "./name-url-dto.interface";

export interface PokemonAbilityDTO {
  effect_entries: {
    effect: string;
    language: NameUrlDTO;
  }[];
}
