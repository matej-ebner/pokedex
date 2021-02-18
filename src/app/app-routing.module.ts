import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationRoutes } from 'src/app/app-navigation-constants';

const routes: Routes = [
    {
        path: NavigationRoutes.HOMEPAGE,
        loadChildren: () =>
            import('./pages/homepage-container/homepage-container.module').then(
                m => m.HomepageContainerModule
            ),
    },
    {
        path: NavigationRoutes.MY_POKEMON,
        loadChildren: () =>
            import('./pages/my-pokemon-container/my-pokemon-container.module').then(
                m => m.MyPokemonContainerModule
            ),
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabled',
            scrollPositionRestoration: 'disabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
