import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http'; // 👈 Usiamo questo che è moderno e facilissimo!

import { App } from './app';
import { AggiungiAutoreComponent } from './components/aggiungi-autore/aggiungi-autore';
import { RegistraPrestitoComponent } from './components/registra-prestito/registra-prestito';

@NgModule({
  declarations: [
    App,
    AggiungiAutoreComponent,
    RegistraPrestitoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // 👈 Qui dentro ora c'è solo questo, super pulito!
  ],
  providers: [
    provideHttpClient() // 👈 Diciamo ad Angular di attivare internet da qui
  ],
  bootstrap: [App]
})
export class AppModule { }