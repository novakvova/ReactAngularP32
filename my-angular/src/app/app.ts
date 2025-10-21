import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';

@Component({
  selector: 'app-salo',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular');

  public counter: number = 0;

  increment() {
    this.counter++;
  }
}
