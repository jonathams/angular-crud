import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { GamesListComponent } from "./games/games-list/games-list.component";
import { GamesFormComponent } from "./games/games-form/games-form.component";
import { GamesDetailComponent } from "./games/games-detail/games-detail.component";

const routes:Routes = [
    /*{path: '', redirectTo: 'admin/games', pathMatch: 'full'} 
    {path: 'admin/games', loadChildren: './games/games.module#GamesModule'}
    */
  { path: '', component: GamesListComponent},
  { path: 'new', component: GamesFormComponent},
  { path: ':id/edit', component: GamesFormComponent},
  { path: ':id', component: GamesDetailComponent}
  
  /*, 
  { 
    path: 'admin/filmes', 
    loadChildren: './filmes/filmes.module#FilmeModule'     
  },
  { path: 'admin/ingressos', loadChildren: './ingressos/ingresso.module#IngressoModule'},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found'} //rota invalida*/
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}