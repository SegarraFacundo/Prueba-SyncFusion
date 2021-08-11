import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { SidebarModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { SideBarService } from './services/side-bar.service';

@NgModule({
  declarations: [
    SidebarMenuComponent,
    LayoutComponent,
    NavbarMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule,
    TreeViewModule
  ],
  providers: [
    SideBarService
  ]
})
export class LayoutModule { }
