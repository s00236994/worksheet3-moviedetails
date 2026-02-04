import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Movieservice {

  private _movies = signal([
    { "title": "Inception", "year": 2010, "director": "Christopher Nolan" },
    { "title": "Real Steel", "year": 2011, "director": "Shawn Levy" },
    { "title": "Avatar", "year": 2009, "director": "James Cameron" },
    { "title": "Taken", "year": 2008, "director": "Pierre Morel" },
    { "title": "Oppenheimer", "year": 2023, "director": "Christopher Nolan" },
  ]);

  public movies = this._movies.asReadonly();

  private _favourites = signal<string[]>([]);
  public favourites = this._favourites.asReadonly();

  public addFav(title: string) {
    this._favourites.update(current => [...current, title]);
  }

  public delFav(index: number) {
    this._favourites.update(current =>
      current.filter((_, i) => i !== index)
    );
  }
}
