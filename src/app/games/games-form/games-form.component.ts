import { Component, OnInit } from '@angular/core';
import { Game } from "../game.model";
import { GamesService } from "../../services/games.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Response } from '@angular/http';
import 'rxjs/add/operator/catch'
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})
export class GamesFormComponent implements OnInit {

  constructor(private gamesService:GamesService,
              private router:Router,
              private route:ActivatedRoute) { }

  formGames = new FormGroup({
    'name': new FormControl(),
    'genre': new FormControl(),
    'platform': new FormControl(),
    'launchDate': new FormControl(),    
    'esrbRating': new FormControl()
  });

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
    const filme = this.formGames.value;
    if(this.key){
      this.gamesService.update(this.game, this.key).subscribe(
        (res:Response)=>{
          console.log(res.json());
        }
      );
    }else{
      console.log('save do form')
      this.gamesService.save(this.game).catch(
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