import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AggiungiAutore } from './components/aggiungi-autore/aggiungi-autore';
import { RegistraPrestito } from './components/registra-prestito/registra-prestito';

@NgModule({
  declarations: [App, AggiungiAutore, RegistraPrestito],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
