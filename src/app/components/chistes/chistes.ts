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
  rating = 0;

  ngOnInit(): void {
    this.loadJoke();
   
  }

  loadJoke(): void {
    this.rating = 0;
    this.joke = null;
    this.chistesService.getRandomJoke().subscribe({
      next: (joke) => {
          console.log('Chiste recibido:', joke),
        this.joke = joke},
      error: (err) => {
        console.error('Error cargando chiste:', err);
        this.joke = null;
      },
    });
    
  }

   setRating(value: number): void {
    this.rating = value;
    console.log(`Calificaste este chiste con ${value} estrellas`);

    // Aquí podrías llamar a un servicio para guardar la valoración en backend
  }




}


  // git config --global user.email "you@example.com"
  // git config --global user.name "Your Name"