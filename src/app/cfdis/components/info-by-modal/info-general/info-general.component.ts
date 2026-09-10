import { Component, input } from '@angular/core';
import { toCFDI } from '../../../interfaces/to.cfdi.interface';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'info-general-component',
  imports: [ CurrencyPipe, CommonModule ],
  templateUrl: './info-general.component.html',
})
export class InfoGeneralComponent {

  gral = input.required<toCFDI>();

}
