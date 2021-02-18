import { NameUrlDTO } from "./name-url-dto.interface";

export interface PokemonTypeDTO {
  damage_relations: {
    double_damage_from: NameUrlDTO[];
    double_damage_to: NameUrlDTO[];
    half_damage_from: NameUrlDTO[];
    half_damage_to: NameUrlDTO[];
    no_damage_from: NameUrlDTO[];
    no_damage_to: NameUrlDTO[];
  };
}
