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

  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.apiUrl);
    
  }
}
