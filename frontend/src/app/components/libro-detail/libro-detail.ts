import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { BibliotecaService } from '../../services/biblioteca';

@Component({
  selector: 'app-libro-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './libro-detail.html',
  styleUrls: ['./libro-detail.css']
})
export class LibroDetailComponent implements OnInit {

  idLibro: number = 0;
  // Oggetto inizialmente vuoto (null) che conterrà tutti i dati del libro
  libro: any = null;

  constructor(
    private bibliotecaService: BibliotecaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Catturiamo l'ID del libro dall'URL (es. /libro/100)
    this.idLibro = Number(this.route.snapshot.paramMap.get('id'));
    this.caricaDettaglio();
  }

  caricaDettaglio(): void {
    this.bibliotecaService.getDettaglioLibro(this.idLibro).subscribe({
      next: (data: any) => {
        this.libro = data;
      },
      error: (err: any) => {
        console.error('Errore nel recupero del dettaglio libro:', err);
      }
    });
  }
}