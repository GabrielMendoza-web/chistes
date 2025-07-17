import { Injectable } from '@angular/core';
import { Joke, Translation } from '../components/models/ChisteModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChistesService {
  private apiUrl = 'https://v2.jokeapi.dev/joke/Any';
  private apiTranslateUrl = 'http://localhost:3000/api/translate';
  private apiKey = '4de903eb-9215-4524-89d1-f7c2005c9277:fx';

  constructor(private http: HttpClient) {}

  enviarCalificacion(calificacion: {
    id: number;
    category: string;
    rating: number;
  }): Observable<any> {
    const backendUrl = 'http://localhost:8080/chistes/';
    return this.http.post(backendUrl, calificacion);
  }

  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.apiUrl);
  }

  translateText(text: string, targetLang: string): Observable<Translation> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `DeepL-Auth-Key ${this.apiKey}`
    });

    const body = {
      text: [text],
      target_lang: targetLang
    };

    return this.http.post<Translation>(this.apiTranslateUrl, body, { headers });
  }
}
