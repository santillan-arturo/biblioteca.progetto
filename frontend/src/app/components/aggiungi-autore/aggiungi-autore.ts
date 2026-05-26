import { Component } from '@angular/core';
import { BibliotecaService } from '../../services/biblioteca';

@Component({
  selector: 'app-aggiungi-autore',
  templateUrl: './aggiungi-autore.component.html',
  styleUrls: ['./aggiungi-autore.component.css']
})
export class AggiungiAutoreComponent {
  // Oggetto che conterrà i dati inseriti nel form dall'utente
  nuovoAutore = {
    Nome: '',
    Cognome: '',
    Nazionalita: ''
  };

  constructor(private bibliotecaService: BibliotecaService) {}

  // Funzione che si attiva quando l'utente preme il bottone "Invia"
  inviaForm() {
    this.bibliotecaService.aggiungiAutore(this.nuovoAutore).subscribe({
      next: (risposta) => {
        alert('Autore inserito con successo nel database!');
        // Svuota il form dopo il salvataggio
        this.nuovoAutore = { Nome: '', Cognome: '', Nazionalita: '' };
      },
      error: (errore) => {
        console.error(errore);
        alert("Errore durante l'inserimento dell'autore.");
      }
    });
  }
}