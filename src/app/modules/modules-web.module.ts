import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesWebRoutingModule } from './modules-web-routing.module';
import { LayoutModule } from '../shared/layout/layout.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesWebRoutingModule,
    LayoutModule,
  ]
})
export class ModulesWebModule { }
