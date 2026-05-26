import { Component } from '@angular/core';
import { BibliotecaService } from '../../services/biblioteca';

@Component({
  selector: 'app-registra-prestito',
  templateUrl: './registra-prestito.component.html',
  styleUrls: ['./registra-prestito.component.css']
})
export class RegistraPrestitoComponent {
  // Oggetto che conterrà i dati del prestito scritti nel form
  nuovoPrestito = {
    Data_Inizio: '',
    Data_Scadenza: '',
    id_copie_fk: null, // ID della copia del libro preso in prestito
    id_utenti_fk: null  // ID dell'utente che prende il libro
  };

  constructor(private bibliotecaService: BibliotecaService) {}

  // Funzione che si attiva quando l'utente preme il bottone "Registra"
  inviaForm() {
    this.bibliotecaService.aggiungiPrestito(this.nuovoPrestito).subscribe({
      next: (risposta) => {
        alert('Prestito registrato con successo nel database!');
        // Resetta il form
        this.nuovoPrestito = { Data_Inizio: '', Data_Scadenza: '', id_copie_fk: null, id_utenti_fk: null };
      },
      error: (errore) => {
        console.error(errore);
        alert("Errore durante la registrazione del prestito.");
      }
    });
  }
}