import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  private apiUrl = 'https://shiny-memory-v6q997rp7grg2p74g-5000.app.github.dev/api';  
  
  constructor(private http: HttpClient) { }

  // Scarica tutti i generi
  getGeneri(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/generi`);
  }

  // Scarica i libri di un genere
  getLibriPerGenere(idGenere: number, search: string = ''): Observable<any[]> {
    let url = `${this.apiUrl}/generi/${idGenere}/libri`;
    if (search) {
      url += `?search=${encodeURIComponent(search)}`;
    }
    return this.http.get<any[]>(url);
  }

  // Scarica il dettaglio di un libro
  getDettaglioLibro(idLibro: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/libri/${idLibro}`);
  }
}