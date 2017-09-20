import { Component, OnInit } from '@angular/core';
import { Game } from "../game.model";
import { GamesService } from "../../services/games.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.css']
})
export class GamesDetailComponent implements OnInit {

  constructor(private gamesService:GamesService,
              private route:ActivatedRoute,
              private router:Router) { }

  key:string;

  game:Game = new Game();

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.key = params.id;

        console.log('key = ' , this.key);
        if(this.key != undefined){
          this.gamesService.getGame(this.key).subscribe(
            (game:Game)=>{
              this.game = game;
            }
          )
        }
      }
    )
  }

  delete(){
    this.gamesService.delete(this.key).subscribe(
      ()=>{
        this.router.navigate(['']);
      }
    );    
  }
}