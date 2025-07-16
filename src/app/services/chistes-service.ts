import { Injectable } from '@angular/core';
import { Joke } from '../components/models/ChisteModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChistesService {
  private apiUrl = 'https://v2.jokeapi.dev/joke/Any';

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
}
