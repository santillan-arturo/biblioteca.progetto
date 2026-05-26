import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 Importiamo i form qui
import { BibliotecaService } from '../../services/biblioteca';

@Component({
  selector: 'app-aggiungi-autore',
  standalone: true,                            // 👈 Confermiamo che è standalone
  imports: [FormsModule],                      // 👈 Diamo i Form a QUESTO componente
  templateUrl: './aggiungi-autore.html',
  styleUrls: ['./aggiungi-autore.css']
})
export class AggiungiAutoreComponent {
  nuovoAutore = {
    Nome: '',
    Cognome: '',
    Nazionalita: ''
  };

  constructor(private bibliotecaService: BibliotecaService) {}

  inviaForm() {
    this.bibliotecaService.aggiungiAutore(this.nuovoAutore).subscribe({
      next: (risposta) => {
        alert('Autore inserito con successo nel database!');
        this.nuovoAutore = { Nome: '', Cognome: '', Nazionalita: '' };
      },
      error: (errore) => {
        console.error(errore);
        alert("Errore durante l'inserimento dell'autore.");
      }
    });
  }
}