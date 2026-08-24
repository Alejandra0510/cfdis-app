import { Component, computed, inject, input, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ListCfdisComponent } from "../../components/list-cfdis/list-cfdis.component";
import { CfdisService } from '../../services/cfdis.service';

@Component({
  selector: 'by-list-page-component',
  imports: [ListCfdisComponent],
  templateUrl: './by-list-page.component.html',
})
export class ByListPageComponent {

  cfdiService = inject(CfdisService);

  size = signal<number>(10);
  page = signal<number>(0);

  totalReg = this.cfdiService.rowCount; //trae el total de los registros

  cfdiResource = rxResource({
    params: () => ({ size: this.size(), page: this.page() }),
    stream: ({ params }) => {
      return this.cfdiService.getByAllCfdis( params.page, params.size )
    }
  })

  onPageChange(newPage: number) {
    this.page.set(newPage);
  }
}
