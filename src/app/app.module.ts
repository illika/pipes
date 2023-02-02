import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

import { LOCALE_ID } from '@angular/core';
// Cambiar Local
import localEsPe from '@angular/common/locales/es-PE';
import '@angular/common/locales/global/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsPe);
//registerLocaleData(localFr);

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    RouterModule,
    SharedModule, 
    VentasModule,

    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-PE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
