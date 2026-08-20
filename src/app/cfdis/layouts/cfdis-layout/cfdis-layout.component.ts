import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTopComponent } from "../../components/menu-top/menu-top.component";

@Component({
  selector: 'cfdis-layout-component',
  imports: [MenuTopComponent, RouterOutlet],
  templateUrl: './cfdis-layout.component.html',
})
export class CfdisLayoutComponent {}
