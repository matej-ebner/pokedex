import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
import { PokemonDetailMovesComponent } from './pokemon-detail-moves.component';

@NgModule({
    declarations: [PokemonDetailMovesComponent],
    imports: [SharedModule],
    exports: [PokemonDetailMovesComponent],
})
export class PokemonDetailMovesModule {}
