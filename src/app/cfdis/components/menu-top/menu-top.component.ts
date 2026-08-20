import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'menu-top',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-top.component.html',
})
export class MenuTopComponent {

  goExit = () => {
      window.location.assign('./');
  }
}
