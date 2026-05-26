# Relazione Progetto: Gestione Biblioteca

## Suddivisione del lavoro
Studente A: Feature "Visualizzazione, Filtri e Ricerca Avanzata" (Navigazione a 3 livelli, query con JOIN, barra di ricerca in tempo reale).
Studente B : Feature "Gestione e Inserimento" (Schema autore/prestiti, rotte POST, form di inserimento).

---

## Architettura e Navigazione (Feature A)
L'applicazione seguirà una navigazione verticale a 3 livelli per l'esplorazione del catalogo:

1. Livello 1 (Home - Generi): Visualizzazione di tutti i generi letterari disponibili sotto forma di Card moderne (es. Fantasy, Sci-Fi, Gialli).
2. Livello 2 (Lista Libri): Cliccando su un genere, l'utente visualizza la lista di tutti i libri appartenenti a quel genere (con dettagli su autore e anno). In questo livello è integrata una barra di ricerca che filtra i titoli in tempo reale dialogando con il backend.
3. **Livello 3 (Dettaglio Libro): Cliccando su un singolo libro, si apre una scheda tecnica dettagliata che mostra tutte le informazioni recuperate dal database TiDB Cloud.

---

---

## 📐 Schema E/R Definitivo (Target: TiDB Cloud)
Il database è stato creato direttamente su TiDB Cloud utilizzando il motore InnoDB. Per garantire la massima consistenza e seguire le specifiche del progetto, le chiavi primarie sono state strutturate con il formato `id_nome_tabella` e non utilizzano l'AUTO_INCREMENT (gli ID verranno gestiti manualmente).

### Struttura delle 10 Tabelle Create:
1.  **Generi** (`id_generi` PRIMARY KEY, Nome, Descrizione)
2.  **Autori** (`id_autori` PRIMARY KEY, Nome, Cognome, Nazionalita)
3.  **Editori** (`id_editori` PRIMARY KEY, Nome, Citta)
4.  **Libri** (`id_libri` PRIMARY KEY, Titolo, ISBN, Anno_Pubblicazione, id_generi_fk, id_editori_fk, id_autori_fk)
5.  **Copie** (`id_copie` PRIMARY KEY, Codice_Inventario, Stato_Conservazione, id_libri_fk)
6.  **Utenti** (`id_utenti` PRIMARY KEY, Nome, Cognome, Email, Telefono)
7.  **Prestiti** (`id_prestiti` PRIMARY KEY, Data_Inizio, Data_Scadenza, Data_Restituzione, id_copie_fk, id_utenti_fk)
8.  **Sezioni_Biblioteca** (`id_sezioni_biblioteca` PRIMARY KEY, Nome_Sala, Piano, id_generi_fk)
9.  **Recensioni** (`id_recensioni` PRIMARY KEY, Voto, Commento, id_libri_fk, id_utenti_fk)
10. **Sanzioni** (`id_sanzioni` PRIMARY KEY, Importo, Pagata, id_prestiti_fk)