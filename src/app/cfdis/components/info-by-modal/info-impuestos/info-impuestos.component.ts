import { Component, effect, input } from '@angular/core';
import { totalImpuestos } from './../../../interfaces/to.cfdi.interface';

@Component({
  selector: 'info-impuestos-component',
  imports: [],
  templateUrl: './info-impuestos.component.html',
})
export class InfoImpuestosComponent {

  imptos = input<totalImpuestos[]>();

  debb = effect(() => {
    console.log(this.imptos());
    console.log(this.imptos() === undefined);
    console.log( Array.isArray(this.imptos()));
  })

}
