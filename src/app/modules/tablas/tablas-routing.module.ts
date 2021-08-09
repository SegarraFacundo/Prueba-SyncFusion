import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PivotViewComponent } from './pivot-view/pivot-view.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';

const routes: Routes = [
  {
    path: 'pivot-view',
    component: PivotViewComponent,
  },
  {
    path: 'tree-grid',
    component: TreeGridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaRoutingModule {}
