import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { ConceptoById } from '../../../interfaces/to.cfdi.interface';

@Component({
  selector: 'info-conceptos-component',
  imports: [CurrencyPipe],
  templateUrl: './info-conceptos.component.html',
})
export class InfoConceptosComponent {

  ctos = input.required<ConceptoById[]>();

}
