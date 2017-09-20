import { Component, OnInit } from '@angular/core';
import { Game } from "../game.model";
import { GamesService } from "../../services/games.service";

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  constructor(private gamesService:GamesService) { }

  games:Game[];

  ngOnInit() {
    this.gamesService.getAllGames().subscribe(
      (games:Game[]) => {
        this.games = games;
      }
    );
  }

  delete(index:number){
     this.gamesService.delete(this.games[index]['$key']).catch(
      (res : any) => {
        console.log("erroooooo")
        //this.error = "Erro ao se comunicar com o servidor";
        return res;
      }
    ).subscribe(
      (res:Response) => {
        this.games.splice(index,1);
      }
    );
  }
} 