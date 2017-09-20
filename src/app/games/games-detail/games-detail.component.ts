import { Component, OnInit } from '@angular/core';
import { Game } from "../game.model";
import { GamesService } from "../../services/games.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.css']
})
export class GamesDetailComponent implements OnInit {

  constructor(private gamesService:GamesService,
              private route:ActivatedRoute) { }

  game:Game = new Game;

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        let key = params.id;
        if(key != undefined){
          this.gamesService.getGame(key).subscribe(
            (game:Game)=>{
              this.game = game;
            }
          )
        }
      }
    )
  }
}
