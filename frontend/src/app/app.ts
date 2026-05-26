import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Percorso preciso per raggiungere il tuo componente standalone
import { LibriListComponent } from './components/libri-list/libri-list';

@Component({
  selector: 'app-root',
  standalone: true,
  // Qua diciamo ad app.html che 'app-libri-list' è un componente conosciuto e valido
  imports: [CommonModule, RouterOutlet, LibriListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'biblioteca';
}