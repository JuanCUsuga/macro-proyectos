import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Importa el módulo de tarjetas

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
