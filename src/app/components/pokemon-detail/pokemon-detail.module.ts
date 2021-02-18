import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared-modules/shared/shared.module";
import { PokemonTypesModule } from "./pokemon-detail-types/pokemon-detail-types.module";
import { PokemonDetailComponent } from "./pokemon-detail.component";
import { PokemonDetailAbilitiesModule } from "./pokemon-detail-abilities/pokemon-detail-abilities.module";
import { PokemonDetailMovesModule } from "./pokemon-detail-moves/pokemon-detail-moves.module";
import { PokemonDetailStatsModule } from "./pokemon-detail-stats/pokemon-detail-stats.module";

@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [
    SharedModule,
    PokemonDetailStatsModule,
    PokemonTypesModule,
    PokemonDetailAbilitiesModule,
    PokemonDetailMovesModule,
  ],
  exports: [PokemonDetailComponent],
})
export class PokemonDetailModule {}
