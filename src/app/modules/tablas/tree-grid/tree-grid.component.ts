import { Component, OnInit } from '@angular/core';
import { PageSettingsModel, SortSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss']
})
export class TreeGridComponent implements OnInit {

  public data: Object[] = [];
  public sortSettings!: SortSettingsModel;
  public pageSettings!: PageSettingsModel;

  ngOnInit(): void {
    this.data = sampleData;

    this.sortSettings = {
      columns: [
        { field: 'taskName', direction: 'Ascending' },
        { field: 'taskID', direction: 'Descending' },
      ],
    };
    this.pageSettings = { pageSize: 6, currentPage: 4};
  }

}
