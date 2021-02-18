import { NameUrlDTO } from "./name-url-dto.interface";

export interface PokemonsListDTO {
  count: number;
  next: string;
  previous: string;
  results: NameUrlDTO[];
}
