import { Component, effect, input } from '@angular/core';
import { toCFDI } from '../../../interfaces/to.cfdi.interface';
import { CommonModule, CurrencyPipe } from '@angular/common';
@Component({
  selector: 'info-general-component',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './info-general.component.html',
})
export class InfoGeneralComponent {

  gral = input.required<toCFDI>();

  // deb = effect(() => {
  //   console.log(this.gral().conceptos);
  //   console.log(this.gral().total_impuestos);
  // })

}
