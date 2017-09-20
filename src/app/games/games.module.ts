import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GamesFormComponent } from "./games-form/games-form.component";
import { GamesDetailComponent } from "./games-detail/games-detail.component";
import { GamesListComponent } from "./games-list/games-list.component";

@NgModule({
    declarations:[
        GamesFormComponent,
        GamesDetailComponent,
        GamesListComponent
    ],
    imports:[
        FormsModule
    ]
})
export class FilmeModule{}