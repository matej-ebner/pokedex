import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";
import { PokemonDetailModule } from "../pokemon-detail/pokemon-detail.module";

import { PokemonCardComponent } from "./pokemon-card.component";

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [SharedModule, PokemonDetailModule],
  exports: [PokemonCardComponent],
})
export class PokemonCardModule {}
