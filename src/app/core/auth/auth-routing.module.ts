import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './views/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'catalogo',
        loadChildren: () =>
          import('@auth/modules/catalogo/catalogo.module').then((m) => m.CatalogoModule),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('@auth/modules/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'empresa',
        loadChildren: () =>
          import('@auth/modules/empresa/empresa.module').then((m) => m.EmpresaModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
