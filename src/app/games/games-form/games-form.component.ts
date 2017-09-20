import { Component, OnInit } from '@angular/core';
import { Game } from "../game.model";
import { GamesService } from "../../services/games.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import 'rxjs/add/operator/catch'
@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})
export class GamesFormComponent implements OnInit {

  constructor(private gameService:GamesService,
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

  game:Game = new Game();

  ngOnInit() {
  }

  save(){
    console.log('save do form')
    this.gameService.save(this.game).catch(
      (res : any) => {
        console.log(res);
        return null;
      }
    ).subscribe(
      (res:Response)=>{
        this.router.navigate(['../'], {relativeTo:this.route});
        console.log(res);
      }
    );
  }
}