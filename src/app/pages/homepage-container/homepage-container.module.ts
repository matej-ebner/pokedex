import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PokemonsListModule } from "src/app/components/pokemons-list/pokemons-list.module";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";

import { HomepageContainerComponent } from "./homepage-container.component";

import { HomepageContainerService } from "./homepage-container.service";

const routes: Routes = [{ path: "", component: HomepageContainerComponent }];

@NgModule({
  declarations: [HomepageContainerComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    PokemonsListModule
  ],
  providers: [HomepageContainerService],
})
export class HomepageContainerModule {}
