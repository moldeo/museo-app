import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MapasComponent } from './mapas/mapas.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { ReglasComponent } from './reglas/reglas.component';
import { LibroComponent } from './libro/libro.component';
import { JuegosComponent } from './juegos/juegos.component';
import { TriviaComponent } from './juegos/trivia/trivia.component';
import { AventuraComponent } from './juegos/aventura/aventura.component';
import { Per1Component } from './juegos/aventura/per-1/per-1.component';

export const router: Routes = [
    { path: 'app', component: AppComponent },
    { path: 'mapas', component: MapasComponent },
    { path: 'objetos', component: ObjetosComponent },
    { path: 'libro', component: LibroComponent },
    { path: 'reglas', component: ReglasComponent },
    { path: 'juegos', component: JuegosComponent, children: [
      { path: 'trivia', component: TriviaComponent},
      { path: 'aventura', component: AventuraComponent, children: [
        { path: 'per-1', component: Per1Component},
      ] },
    ] },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });
