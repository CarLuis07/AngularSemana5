import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarBotonesComponent } from './navbar-botones/navbar-botones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarBotonesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
