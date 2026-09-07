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
  page_initial = signal<number>(0);

  rows_count = this.cfdiService.count_rows;
  pages_count = this.cfdiService.total_pages;

  cfdiResource = rxResource({
    params: () => ({ size: this.size(), page: this.page_initial() }),
    stream: ({ params }) => {
      return this.cfdiService.getByAllCfdis( params.size, params.page )
    }
  })

  onPageChange(newPage: number) {
    this.page_initial.set(newPage);
  }
}
