import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-form');

  public onSetTokenAuth() {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieGFqb3kxNDQzMkBoaDdmLmNvbSIsImltYWdlIjoiaXVxd2hreG4ueXloLndlYnAiLCJyb2xlcyI6InVzZXIiLCJleHAiOjE4NDgwNjAxOTR9.GrMNHpvhbpHiOvcf3rl0Yr3TSGEkVuSiGZbGuwZgvrI');
  }

  public onDeleteTokenAuth() {
    localStorage.removeItem('token');
  }
}
