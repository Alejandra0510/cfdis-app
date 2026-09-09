import { Component, input } from '@angular/core';
import { toCFDI } from '../../../interfaces/to.cfdi.interface';

@Component({
  selector: 'info-general-component',
  imports: [],
  templateUrl: './info-general.component.html',
})
export class InfoGeneralComponent {

  gral = input.required<toCFDI>();

}
