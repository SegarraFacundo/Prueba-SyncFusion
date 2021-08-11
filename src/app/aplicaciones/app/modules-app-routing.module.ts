import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'tabla',
    component: LayoutComponent,
    loadChildren: () =>
      import('@modules/tablas/tablas.module').then((m) => m.TablasModule),
  },
  {
    path: '**',
    redirectTo: '/app/auth/catalogo'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesAppRoutingModule { }
