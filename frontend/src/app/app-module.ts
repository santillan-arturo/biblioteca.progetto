import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { App } from './app';
import { AggiungiAutoreComponent } from './components/aggiungi-autore/aggiungi-autore';
import { RegistraPrestitoComponent } from './components/registra-prestito/registra-prestito';

@NgModule({
  declarations: [
    App // 👈 Qui lasciamo solo App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AggiungiAutoreComponent,
    RegistraPrestitoComponent 
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }