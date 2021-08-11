import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './core/errors/views/error404/error404.component';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () =>
      import('./aplicaciones/app/modules-app.module').then((m) => m.ModulesAppModule),
  },
  {
    path: 'hibrido',
    loadChildren: () =>
      import('./aplicaciones/hibrido/modules-hibrido.module').then(
        (m) => m.ModulesHibridoModule
      ),
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
