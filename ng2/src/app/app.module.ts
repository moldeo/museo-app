import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//Components
import { AppComponent } from './app.component';
import { MapasComponent } from './mapas/mapas.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { ReglasComponent } from './reglas/reglas.component';
import { LibroComponent } from './libro/libro.component';
import { JuegosComponent } from './juegos/juegos.component';
//Components of Juegos
import { TriviaComponent } from './juegos/trivia/trivia.component';
import { AventuraComponent } from './juegos/aventura/aventura.component';
import { Per1Component } from './juegos/aventura/per-1/per-1.component';

//Services
import { JsonService } from './json.service';
import { FileAdminService } from './fileadmin.service';
import { RoutesTransition } from './routestransition.service';
import { SnapService } from './snap.service';

//Routers
import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    MapasComponent,
    ReglasComponent,
    ObjetosComponent,
    JuegosComponent,
    LibroComponent,
    TriviaComponent,
    AventuraComponent,
    Per1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
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
    ], {
      preloadingStrategy: PreloadAllModules
    }),
    routes,
  ],
  providers: [
    JsonService,
    FileAdminService,
    RoutesTransition,
    SnapService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
