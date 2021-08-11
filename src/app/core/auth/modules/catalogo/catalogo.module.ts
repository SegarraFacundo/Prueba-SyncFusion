import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './views/catalogo.component';
import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoService } from './services/catalogo.service';
import { LoadingModule } from '../../../../shared/loading/loading.module';

@NgModule({
  declarations: [
    CatalogoComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    LoadingModule
  ],
  providers: [
    CatalogoService
  ]
})
export class CatalogoModule { }
