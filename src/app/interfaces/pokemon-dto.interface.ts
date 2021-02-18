import { NameUrlDTO } from "./name-url-dto.interface";

export interface SpritesDTO {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: {
    dream_world: {
      front_default: string;
    };
    official_artwork: {
      front_default: string;
    };
  };
}

export interface PokemonDTO {
  id: number;
  name: string;
  sprites: SpritesDTO;
  abilities: {
    ability: NameUrlDTO;
  }[];
  types: {
    type: NameUrlDTO;
  }[];
  moves: {
    move: NameUrlDTO;
  }[];
}
