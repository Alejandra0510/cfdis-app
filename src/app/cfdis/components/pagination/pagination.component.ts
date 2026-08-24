import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'pagination-component',
  imports: [],
  templateUrl: './pagination.component.html',
})

export class PaginationComponent {

  page = input.required<number>();
  totalRecords = input.required<number>();
  size = input<number>(10);

  // notifica el cambio de página
  pageChange = output<number>();

  // Cálculo derivado del total de páginas
  totalPages = computed(() => {
    const total = this.totalRecords();
    const pageSize = this.size();
    return total > 0 ? Math.ceil(total / pageSize) : 1;
  });


  // Métodos de navegación
  prevPage() {
    if (this.page()) {
      this.pageChange.emit(this.page() - 1);
    }
  }

  initPage(){

  }

  endPage(){

  }

  nextPage() {
    if (this.page() < this.totalPages()) {
      this.pageChange.emit(this.page() + 1);
    }
  }
}
