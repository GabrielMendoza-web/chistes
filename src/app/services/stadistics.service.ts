import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ranking } from '../models/stadistics';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StadisticsService {


  constructor(private http: HttpClient) {}

  getEstadisticas(): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(
      'http://localhost:8080/chistes/calificaciones'
    );
  }
}
