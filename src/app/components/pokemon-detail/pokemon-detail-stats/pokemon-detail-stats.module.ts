import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
import { PokemonDetailStatsComponent } from './pokemon-detail-stats.component';

@NgModule({
    declarations: [PokemonDetailStatsComponent],
    imports: [SharedModule],
    exports: [PokemonDetailStatsComponent],
})
export class PokemonDetailStatsModule {}
