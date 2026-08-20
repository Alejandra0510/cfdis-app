import { Routes } from "@angular/router";
import { CfdisLayoutComponent } from "./layouts/cfdis-layout/cfdis-layout.component";
import { ByListPageComponent } from "./pages/by-list-page/by-list-page.component";

export const routesCfdis: Routes = [
  {
    path: '',
    component: CfdisLayoutComponent,

    children: [
      {
        path: 'by-list-page',
        component: ByListPageComponent
      }
    ]
  }

]

export default routesCfdis;
