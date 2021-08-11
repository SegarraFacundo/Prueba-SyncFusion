import { Component } from '@angular/core';
import { SideBarService } from '../../services/side-bar.service';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
})
export class NavbarMenuComponent {

  constructor(private sideBarService: SideBarService) {}

  clickMenu() {
    this.sideBarService.toggle();
  }
}
