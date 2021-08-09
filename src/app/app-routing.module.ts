import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () =>
      import('./modules/modules-web.module').then((m) => m.ModulesWebModule),
  },
  {
    path: 'hibrido',
    loadChildren: () =>
      import('./modules/modules-hibrido.module').then(
        (m) => m.ModulesHibridoModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
