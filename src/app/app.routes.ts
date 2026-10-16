import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing.component').then((m) => m.LandingComponent),
    title: 'THERANOSTIX — Transforming the Future of Nuclear Medicine',
  },
  { path: '**', redirectTo: '' },
];
