import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { NavigationRoutes } from "src/app/app-navigation-constants";
import { NameUrlDTO } from "src/app/interfaces/name-url-dto.interface";
import { PokemonDTO } from "src/app/interfaces/pokemon-dto.interface";
import { PokemonsListDTO } from "src/app/interfaces/pokemons-list-dto.interface";
import { MyPokemonsService } from "src/app/services/my-pokemons.service";
import { PokemonsService } from "src/app/services/pokemons.service";
import { SpinnerService } from "src/app/services/spinner.service";

@Component({
  selector: "px-pokemons-list",
  templateUrl: "./pokemons-list.component.html",
  styleUrls: ["./pokemons-list.component.scss"],
})
export class PokemonsListComponent {
  pokemonsListObservable$: Observable<PokemonsListDTO>;
  pokemonsDataObservable$: Observable<PokemonDTO[]>;
  pokemons: PokemonDTO[] = [];

  previousPokemons: string;
  nextPokemons: string;

  selectedPokemon: PokemonDTO;

  constructor(
    public pokemonsService: PokemonsService,
    private spinnerService: SpinnerService,
    private router: Router,
    private myPokemonsService: MyPokemonsService
  ) {}

  ngOnInit(): void {
    this.myPokemonsService.isMyPokemonPage =
      this.router.url === "/" + NavigationRoutes.MY_POKEMON;

    if (this.myPokemonsService.isMyPokemonPage) {
      this.pokemons = this.myPokemonsService.myPokemons;
    } else {
      this.getPokemons();
    }
  }

  getPokemons(definedUrl?: string): void {
    this.spinnerService.showSpinner = true;
    this.pokemonsListObservable$ = this.pokemonsService
      .getPokemonsListRequest(definedUrl)
      .pipe(
        tap((response: PokemonsListDTO) => {
          this.nextPokemons = response.next;
          this.previousPokemons = response.previous;

          this.pokemonsDataObservable$ = this.pokemonsService
            .getPokemonsRequest(response.results)
            .pipe(
              tap((response: any) => {
                this.pokemons = response;
                this.spinnerService.showSpinner = false;
                window.scrollTo(0, 0);
              })
            );
        })
      );
  }
}
