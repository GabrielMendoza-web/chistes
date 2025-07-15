import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Joke } from '../models/ChisteModel';
import { ChistesService } from '../../services/chistes-service';

@Component({
  selector: 'app-chistes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chistes.html',
  styleUrl: './chistes.scss',
})
export class Chistes {
  joke: Joke | null = null;
  constructor(private chistesService: ChistesService) {}

  ngOnInit(): void {
    this.loadJoke();
  }

  loadJoke(): void {
    this.joke = null;
    this.chistesService.getRandomJoke().subscribe({
      next: (joke) => (this.joke = joke),
      error: (err) => {
        console.error('Error cargando chiste:', err);
        this.joke = null;
      },
    });
    console.log(this.joke)
  }
}


  // git config --global user.email "you@example.com"
  // git config --global user.name "Your Name"