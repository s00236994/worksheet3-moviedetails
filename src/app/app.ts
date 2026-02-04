import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { Movieservice } from './myservices/movieservice'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Week 3 - Movie Details');

  protected movieService = inject(Movieservice);
}
