import { Component, Input, OnInit } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  abrirMenu: boolean = false;

  clickToggleMenu($event: boolean) {
    this.abrirMenu = $event;
  }
}
