import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { NameUrlDTO } from "../interfaces/name-url-dto.interface";

import { PokemonDTO } from "../interfaces/pokemon-dto.interface";
import { PokemonMoveDTO } from "../interfaces/pokemon-move-dto.interface";

@Injectable({
  providedIn: "root",
})
export class PokemonsService {
  baseUrl = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) {}

  getPokemonsListRequest(definedUrl: string): Observable<any> {
    let url: string;
    if (!definedUrl) {
      url = this.baseUrl + `pokemon?offset=$0&limit=50`;
    } else {
      url = definedUrl;
    }
    return this.httpClient.get(url);
  }

  getPokemonsRequest(pokemons: NameUrlDTO[]): Observable<any> {
    const pokemonsRequests: any[] = [];
    pokemons.forEach((pokemonNameUrl: NameUrlDTO) => {
      pokemonsRequests.push(this.httpClient.get(pokemonNameUrl.url));
    });

    return forkJoin([...pokemonsRequests]);
  }

  getPokemonDataRequest(pokemon: PokemonDTO): Observable<any> {
    // Evolution chain
    const evolutionChainRequest = this.httpClient.get(
      this.baseUrl + "evolution-chain/" + pokemon.id
    );

    // Types
    const pokemonTypesRequests: any[] = [];
    pokemon.types.forEach((type: any) => {
      pokemonTypesRequests.push(this.httpClient.get(type.type.url));
    });

    const typesForkJoin = forkJoin([...pokemonTypesRequests]);

    // Abilities
    const pokemonAbilitiesRequests: any[] = [];
    pokemon.abilities.forEach((ability: any) => {
      pokemonAbilitiesRequests.push(this.httpClient.get(ability.ability.url));
    });

    const abilitiesForkJoin = forkJoin([...pokemonAbilitiesRequests]);

    return forkJoin([evolutionChainRequest, typesForkJoin, abilitiesForkJoin]);
  }

  getMoveDetailRequest(url: string): Observable<PokemonMoveDTO> {
    return this.httpClient.get(url) as Observable<PokemonMoveDTO>;
  }
}
