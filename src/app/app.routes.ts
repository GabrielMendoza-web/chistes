import { Routes } from '@angular/router';

import { Estadisticas } from './components/estadisticas/estadisticas';
import { Chistes } from './components/chistes/chistes';

export const routes: Routes = [
  { path: '', component: Chistes },
  { path: 'estadisticas', component: Estadisticas },
];
