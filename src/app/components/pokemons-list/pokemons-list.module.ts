import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";
import { PokemonCardModule } from "../pokemon-card/pokemon-card.module";
import { PokemonDetailModule } from "../pokemon-detail/pokemon-detail.module";

import { PokemonsListComponent } from "./pokemons-list.component";

@NgModule({
  declarations: [PokemonsListComponent],
  imports: [SharedModule, PokemonCardModule,PokemonDetailModule],
  exports: [PokemonsListComponent],
})
export class PokemonsListModule {}
