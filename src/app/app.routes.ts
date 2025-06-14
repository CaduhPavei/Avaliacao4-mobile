import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'vitoria',
    loadComponent: () => import('./pages/vitoria/vitoria.page').then( m => m.VitoriaPage)
  },
  {
    path: 'derrota',
    loadComponent: () => import('./pages/derrota/derrota.page').then( m => m.DerrotaPage)
  },
];
