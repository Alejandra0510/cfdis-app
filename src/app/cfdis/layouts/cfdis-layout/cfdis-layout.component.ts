import { Component, output, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTopComponent } from "../../components/menu-top/menu-top.component";
import { CfdisService } from '../../services/cfdis.service';

@Component({
  selector: 'cfdis-layout-component',
  imports: [MenuTopComponent, RouterOutlet],
  templateUrl: './cfdis-layout.component.html',
})
export class CfdisLayoutComponent {
  cfdiService = inject(CfdisService);

  onReloadInfo( params: number){
    if(!params)return;
    this.cfdiService.reload();
  }

}
