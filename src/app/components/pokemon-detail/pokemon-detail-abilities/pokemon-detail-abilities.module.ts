import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
import { PokemonDetailAbilitiesComponent } from './pokemon-detail-abilities.component';

@NgModule({
    declarations: [PokemonDetailAbilitiesComponent],
    imports: [SharedModule],
    exports: [PokemonDetailAbilitiesComponent],
})
export class PokemonDetailAbilitiesModule {}
