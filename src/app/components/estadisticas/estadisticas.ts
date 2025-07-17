import { Component } from '@angular/core';
import { Ranking, RankingMockData } from '../../models/stadistics';
import { CommonModule } from '@angular/common';
import { StadisticsService } from '../../services/stadistics.service';

@Component({
  selector: 'app-estadisticas',
  imports: [CommonModule],
  templateUrl: './estadisticas.html',
  styleUrl: './estadisticas.scss',
})
export class Estadisticas {
  RankingMockData: Ranking[] = RankingMockData;
  RankingData: Ranking[] = [];

  parseFloat(value: any): number {
    return parseFloat(value);
  }

  Round(value: any): number {
    return Math.round(value)
  }

  constructor(private api: StadisticsService) {}

  ngOnInit() {
    this.api.getEstadisticas().subscribe({
      next: (data) => {
        this.RankingData = data;
      },
    });
  }
}
