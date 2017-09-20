import { Component, OnInit } from '@angular/core';
import { Game } from "../game.model";
import { GamesService } from "../../services/games.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Response } from '@angular/http';
import 'rxjs/add/operator/catch'
@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})
export class GamesFormComponent implements OnInit {

  constructor(private gamesService:GamesService,
              private router:Router,
              private route:ActivatedRoute) { }

  platforms = [
    { value: 'pc', label: "PC"},
    { value: 'xbox360', label: "Xbox 360"},
    { value: 'xbox1', label: "Xbox One"},
    { value: 'ps3', label: "Playstation 3"},
    { value: 'ps4', label: "Playstation 4"},
    { value: 'psvita', label: "PS Vita"},
    { value: '3ds', label: "Nintendo 3DS"},
    { value: 'switch', label: "Nintendo Switch"}    
  ];

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

  save(){
    const game = new Game(this.game.name,this.game.genre, this.game.platform, this.game.launchDate,this.game.esrbRating);
    if(this.key){
      this.gamesService.update(game, this.key).subscribe(
        (res:Response)=>{
          console.log(res.json());
          this.router.navigate(['']);
        }
      );
    }else{
      console.log('save do form')
      this.gamesService.save(game).catch(
        (res : any) => {
          console.log(res);          
          return null;
        }
      ).subscribe(
        (res:Response)=>{
          console.log(res);
          this.router.navigate(['']);    
        }
      );
    }
  }
}