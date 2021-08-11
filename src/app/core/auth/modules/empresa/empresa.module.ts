import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaComponent } from './views/empresa.component';
import { EmpresaService } from './services/empresa.service';
import { EmpresaRoutingModule } from './empresa-routing.module';



@NgModule({
  declarations: [
    EmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule
  ],
  providers: [
    EmpresaService
  ]
})
export class EmpresaModule { }
