import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GamesListComponent } from "./games/games-list/games-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { GamesFormComponent } from "./games/games-form/games-form.component";
import { FormsModule } from "@angular/forms";
import { GamesService } from "./services/games.service";
import { DropdownModule } from "./dropdown/dropdown.module";
import { GamesDetailComponent } from "./games/games-detail/games-detail.component";


@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,
    GamesListComponent,
    GamesFormComponent,
    GamesDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    HttpModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
