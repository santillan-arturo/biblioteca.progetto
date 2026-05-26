import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 Importiamo i form qui
import { BibliotecaService } from '../../services/biblioteca';

@Component({
  selector: 'app-registra-prestito',
  standalone: true,                            // 👈 Confermiamo che è standalone
  imports: [FormsModule],                      // 👈 Diamo i Form a QUESTO componente
  templateUrl: './registra-prestito.html',
  styleUrls: ['./registra-prestito.css']
})
export class RegistraPrestitoComponent {
  nuovoPrestito = {
    Data_Inizio: '',
    Data_Scadenza: '',
    id_copie_fk: null,
    id_utenti_fk: null
  };

  constructor(private bibliotecaService: BibliotecaService) {}

  inviaForm() {
    this.bibliotecaService.aggiungiPrestito(this.nuovoPrestito).subscribe({
      next: (risposta) => {
        alert('Prestito registrato con successo nel database!');
        this.nuovoPrestito = { Data_Inizio: '', Data_Scadenza: '', id_copie_fk: null, id_utenti_fk: null };
      },
      error: (errore) => {
        console.error(errore);
        alert("Errore durante la registrazione del prestito.");
      }
    });
  }
}