export class Game {
    constructor(public name?:string, public genre?:string,public platform?:string, public launchDate?:Date, public esrbRating?:number){
        this.name = name;
        this.genre = genre;
        this.platform = platform;
        this.launchDate = launchDate;
        this.esrbRating = esrbRating;
    }
}