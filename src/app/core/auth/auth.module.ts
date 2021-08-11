import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './views/auth.component';
import { AuthService } from './services/auth.service';
import { LogoAuthComponent } from './components/logo-auth/logo-auth.component';
import { CatalogoService } from './modules/catalogo/services/catalogo.service';
import { LoginService } from './modules/login/services/login.service';
import { EmpresaService } from './modules/empresa/services/empresa.service';

@NgModule({
  declarations: [
    AuthComponent,
    LogoAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  providers: [
    AuthService,
    CatalogoService,
    LoginService,
    EmpresaService
  ]
})
export class AuthModule { }
