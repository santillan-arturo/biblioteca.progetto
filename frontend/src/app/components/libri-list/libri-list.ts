import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'; // 👈 Serve per far funzionare la barra di ricerca (NgModel)
import { BibliotecaService } from '../../services/biblioteca';

@Component({
  selector: 'app-libri-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // 👈 Ricordati di includere FormsModule
  templateUrl: './libri-list.component.html',
  styleUrls: ['./libri-list.component.css']
})
export class LibriListComponent implements OnInit {
  
  idGenere: number = 0;
  listaLibri: any[] = [];
  testoRicerca: string = ''; // 👈 Stringa collegata all'input di ricerca dell'utente

  // Iniettiamo sia il nostro servizio, sia "ActivatedRoute" (che serve a leggere l'URL)
  constructor(
    private bibliotecaService: BibliotecaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Leggiamo il parametro ':id' dall'URL (es. se siamo su /genere/1, prenderà 1)
    this.idGenere = Number(this.route.snapshot.paramMap.get('id'));
    this.caricaLibri();
  }

  // Recupera i libri chiedendoli a Flask (passando l'ID del genere e l'eventuale ricerca)
  caricaLibri(): void {
    this.bibliotecaService.getLibriPerGenere(this.idGenere, this.testoRicerca).subscribe({
      next: (data: any) => {
        this.listaLibri = data;
      },
      error: (err: any) => {
        console.error('Errore nel recupero dei libri:', err);
      }
    });
  }
}