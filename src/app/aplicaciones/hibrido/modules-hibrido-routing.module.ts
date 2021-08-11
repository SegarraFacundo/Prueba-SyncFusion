import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabla',
    loadChildren: () =>
      import('@modules/tablas/tablas.module').then((m) => m.TablasModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesHibridoRoutingModule { }
