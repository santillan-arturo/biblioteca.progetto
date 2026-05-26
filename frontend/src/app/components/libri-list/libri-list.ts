import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // 👈 1. IMPORTIAMO GLI INPUT DI ANGULAR
import { BibliotecaService } from '../../services/biblioteca';

@Component({
  selector: 'app-libri-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // 👈 2. AGGIUNGIAMO FORMSMODULE QUI
  templateUrl: './libri-list.html',
  styleUrls: ['./libri-list.css']
})
export class LibriListComponent implements OnInit {
  listaLibri: any[] = [];
  testoRicerca: string = ''; // 👈 3. DICHIARIAMO LA VARIABILE CHE MANCAVA!

  constructor(private bibliotecaService: BibliotecaService) {}

  ngOnInit(): void {
    this.caricaLibri();
  }

  caricaLibri(): void {
    // Passiamo il testo della ricerca alla tua funzione del servizio
    this.bibliotecaService.getLibriPerGenere(1, this.testoRicerca).subscribe({
      next: (data: any) => {
        this.listaLibri = data;
        console.log('Libri caricati con successo:', data);
      },
      error: (err: any) => {
        console.error('Errore durante il caricamento dei libri:', err);
      }
    });
  }
}