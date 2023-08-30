import { Component, Input } from '@angular/core';
import { IBoton } from './IBotones';

@Component({
  selector: 'app-navbar-botones',
  templateUrl: './navbar-botones.component.html',
  styleUrls: ['./navbar-botones.component.css']
})
export class NavbarBotonesComponent {
//aignandoles entradas para cambiar valores a button
@Input() boton: IBoton={
    type: 'button',
    texto: ''
  }
}
