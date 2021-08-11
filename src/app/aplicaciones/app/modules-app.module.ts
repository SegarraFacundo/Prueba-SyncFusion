import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesAppRoutingModule } from './modules-app-routing.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ModulesAppRoutingModule
  ]
})
export class ModulesAppModule { }
