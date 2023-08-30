import { Component } from '@angular/core';
import { IBoton } from './navbar-botones/IBotones';
import { IFooter } from './footer/Ifootter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular1';

  //arreglo de botones para la navbar
  botones: IBoton[]=[
    {
      type:"button",
      texto: "Planilla De Empleados"
    },{
      type:"button",
      texto: "Permisos / vacaciones De Empleados"
    },
    {
      type:"button",
      texto: "Departamentos"
    },
    {
      type:"button",
      texto: "Horas Extras"
    },
    {
      type:"button",
      texto: "Chequeo de Entrada / Salida"
    }
  ]
    


  //arreglo para el footer
  footers: IFooter[]=[
    {
      href:"https://angular.io/features",
      target:"_blank",
      texto:"Features"
    },
    {
      href:"https://angular.io/about?group=Angular",
      target:"_blank",
      texto:"Acerca "
    },
    {
      href:"https://angular.io/events",
      target:"_blank",
      texto:"Eventos"
    }
  ]


  }
