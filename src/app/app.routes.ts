import { Routes } from '@angular/router';
import { HomeCfdisComponent } from './shared/pages/home-cfdis/home-cfdis.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeCfdisComponent
  },
  {
    path: 'cfdis',
    loadChildren: () => import('./cfdis/cfdis.routes'),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
