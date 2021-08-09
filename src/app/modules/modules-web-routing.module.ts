import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';

const routes: Routes = [
  {
    path: 'tabla',
    component: LayoutComponent,
    loadChildren: () =>
      import('./tablas/tablas.module').then((m) => m.TablasModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesWebRoutingModule { }
