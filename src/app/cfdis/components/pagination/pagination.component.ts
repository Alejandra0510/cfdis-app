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
  page      = signal<number>(1);

  pageChange = output<number>();

  // count = computed(() => {
  //   console.log(this.page());
  //   console.log(this.act_page());
  //   console.log(this.page_size());
  //   if (this.rows() === 0) return 0;
  //   return (this.page() - 1) * this.page_size() + 1;
  // });

  size = computed(() => {
    return Math.min(this.page() * this.page_size(), this.rows());
  });

  // Métodos de navegación
 prevPage() {
    if (this.act_page()) {
      this.page.set(this.page() - 1);
      this.pageChange.emit(this.act_page() - 1);
    }
  }

  nextPage() {
    debugger;
    if (this.act_page() < this.pages()) {
      this.page.update(() => this.page() + 1);
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
