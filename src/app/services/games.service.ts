import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from "@angular/http";
import { Game } from "../games/game.model";
import 'rxjs/add/operator/map';

@Injectable()
export class GamesService {

  constructor(private http:Http) { }
  

  save(game:Game){
    return this.http.post(environment.gameUrl + 'games.json', game);
  }

  update(game:Game, key:string){
    return this.http.put(environment.gameUrl + 'games/' + key + '.json', game);        
  }
  
  delete(key:string){
    return this.http.delete(environment.gameUrl + 'games/' + key + '.json');
  }

  getAllGames(){
    return this.http.get(environment.gameUrl + 'games.json').map(
      (res:Response)=>{
        const data = res.json();
        const games: Game[] = [];
        for(let key in data){
          games.push({
            ... data[key],
            '$key': key
          });
        }
        return games;
      }
    );
  }

  getGame(key:string){
    return this.http.get(environment.gameUrl + "games/" + key + '.json').map(
      (res:Response)=>{
        return { ... res.json(),
                '$key': key};
      }
    );
  }
}
