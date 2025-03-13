import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz redirige a Home
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' }, // Redirección en caso de rutas inválidas
];
