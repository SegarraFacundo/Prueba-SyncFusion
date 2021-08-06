import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos externos
import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';

// Componentes del modulo interno
import { PivotViewComponent } from './pivot-view/pivot-view.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { TablaRoutingModule } from './tablas-routing.module';

@NgModule({
  declarations: [
    PivotViewComponent,
    TreeGridComponent
  ],
  imports: [
    CommonModule,
    TablaRoutingModule,
    TreeGridModule,
    PivotViewModule
  ]
})
export class TablasModule { }
