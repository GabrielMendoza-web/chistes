import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Chistes } from './components/chistes/chistes';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Chistes, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'chistes';
}
