import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Martin Durkin worksheet2');

  protected movies = signal([
    "Law Abiding Citizen",
    "Seven",
    "Rambo",
    "Scarface",
    "Real Steel"]

  )

  protected favourites=signal<string[]>([]);
  

  protected addFavourites(fav:string) {

    //dont allow dupes
    if (!this.favourites().includes(fav) ){

       this.favourites.update(current => [...current, fav]);

    }
   
  }

  protected deleteFavourites(index:number) {
    this.favourites.update(favourites =>
      favourites.filter((_, i) => i !== index)
    );
  }

}


