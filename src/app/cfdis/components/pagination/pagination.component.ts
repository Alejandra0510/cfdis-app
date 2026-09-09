import { Component, computed, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'pagination-component',
  imports: [],
  templateUrl: './pagination.component.html',
})


export class PaginationComponent {

  pages = input.required<number>();
  rows  = input.required<number>();

  act_page  = input.required<number>();
  page_size = input<number>(10);

  pageChange = output<number>();

  // Registro inicial mostrado (1-based para el usuario)
  from = computed(() => {
    if (this.rows() === 0) return 0;
    return this.act_page() * this.page_size() + 1;
  });

  // Registro final mostrado
  to = computed(() => {
    return Math.min((this.act_page() + 1) * this.page_size(), this.rows());
  });

  // Métodos de navegación
 prevPage() {
    if (this.act_page()) {
      this.pageChange.emit(this.act_page() - 1);
    }
  }

  nextPage() {
    if (this.act_page() < this.pages()) {
      this.pageChange.emit(this.act_page() + 1);
    }
  }

  goInit() {
    if (this.act_page() > 1) {
      this.pageChange.emit(0);
    }
  }

  goEnd() {
    if (this.act_page() < this.pages()) {
      this.pageChange.emit(this.pages() - 1);
    }
  }

}
