import { Component, Input } from '@angular/core';
import { IFooter } from './Ifootter';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
@Input() footer: IFooter={
  href:"",
  texto: '',
  target: '_blank'
}
}
