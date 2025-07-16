import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private apiUrl = 'https://de.libretranslate.com/translate';

  constructor(private http: HttpClient) {}

  traducir(
    texto: string,
    origen = 'en',
    destino = 'es'
  ): Observable<{ translatedText: string }> {
    const body = {
      q: texto, // El texto a traducir
      source: origen, // Idioma origen (en inglés)
      target: destino, // Idioma de destino (en español)
      format: 'text', // El formato de texto (debe ser 'text')
    };

    const headers = { 'Content-Type': 'application/json' };

    console.log('Cuerpo de la solicitud:', body); // Agregado para depurar

    return this.http.post<{ translatedText: string }>(this.apiUrl, body).pipe(
      tap((response) => {
        console.log('Respuesta de la API:', response);
      }), 
       catchError(err => {
      console.error('Error de la solicitud:', err);
      return throwError(() => err);  // Devuelve el error para que lo manejes
    })
    );
  }
}
