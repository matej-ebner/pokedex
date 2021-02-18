import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PokemonsListModule } from "src/app/components/pokemons-list/pokemons-list.module";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";

import { MyPokemonContainerComponent } from "./my-pokemon-container.component";

import { MyPokemonContainerService } from "./my-pokemon-container.service";

const routes: Routes = [{ path: "", component: MyPokemonContainerComponent }];

@NgModule({
  declarations: [MyPokemonContainerComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    PokemonsListModule
  ],
  providers: [MyPokemonContainerService],
})
export class MyPokemonContainerModule {}
