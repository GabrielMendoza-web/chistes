import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Joke, Translation } from '../models/ChisteModel';
import { ChistesService } from '../../services/chistes-service';

import { TranslationService } from '../../services/translation-service';

@Component({
  selector: 'app-chistes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chistes.html',
  styleUrl: './chistes.scss',
})
export class Chistes {
  joke: Joke | null = null;
  translatedJoke: string = '';
  constructor(
    private chistesService: ChistesService,
    private traduccionService: TranslationService
  ) {}
  rating = 0;
  loadingStar = false;

  ngOnInit(): void {
    this.loadJoke();
  }

  loadJoke(): void {
    this.rating = 0;
    this.joke = null;
    this.loadingStar = false;
    this.chistesService.getRandomJoke().subscribe({
      next: (joke) => {
        console.log("🚀 ~ Chistes ~ this.chistesService.getRandomJoke ~ joke:", joke)
          this.chistesService.translateText(joke?.type === 'single' ? (joke?.joke || "") + " § " + joke.category
           : ((joke?.setup || "" ) + "\n" + (joke?.delivery || "") + " § " + joke.category) , "ES").subscribe({
            next: (data: Translation) => {
              this.joke = {
                ...joke,
                joke: data.translations[0].text.split('§')[0]?.trim(),
                category: data.translations[0].text.split('§')[1]?.trim()
              }

            }
          })
      },
      error: (err) => {
        console.error('Error cargando chiste:', err);
        this.joke = null;
      },
    });
  }

  setRating(value: number): void {
    if (!this.joke || this.loadingStar) return;
    this.loadingStar = true;
    this.rating = value;
    console.log(`Calificaste este chiste con ${value} estrellas`);

    if (this.joke) {
      const calificacion = {
        id: this.joke.id,
        rating: this.rating,
        category: this.joke.category,
      };

      this.chistesService.enviarCalificacion(calificacion).subscribe({
        next: () => console.log('Calificación enviada con éxito'),
        error: (err) => console.error('Error al enviar la calificación', err),
      });
    }
    this.loadJoke()
  }
}

// git config --global user.email "you@example.com"
// git config --global user.name "Your Name"
