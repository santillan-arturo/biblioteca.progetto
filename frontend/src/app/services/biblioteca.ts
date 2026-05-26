import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  // Indirizzo del tuo backend Flask (porta 5000)
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  // ✍️ Funzione per salvare un Autore (Studente B)
  aggiungiAutore(autore: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/autori`, autore);
  }

  // 📖 Funzione per salvare un Prestito (Studente B)
  aggiungiPrestito(prestito: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/prestiti`, prestito);
  }
}