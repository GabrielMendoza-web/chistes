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

  constructor(private api: StadisticsService) {}

  ngOnInit() {
    //Ahora solo está con la mockData, en cuanto eduardo cree el back se integrará con esa parte
    // this.api.getEstadisticas().subscribe({
    //   next: (data) => {
    //     this.RankingData = data;
    //   },
    // });
  }
}
