import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
import { PokemonDetailTypesComponent } from './pokemon-detail-types.component';

@NgModule({
    declarations: [PokemonDetailTypesComponent],
    imports: [SharedModule],
    exports: [PokemonDetailTypesComponent],
})
export class PokemonTypesModule {}
