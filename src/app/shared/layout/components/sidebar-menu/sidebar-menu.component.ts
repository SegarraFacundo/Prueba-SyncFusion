import {
  SidebarComponent,
  TreeViewComponent,
} from '@syncfusion/ej2-angular-navigations';
import { SideBarService } from '../../services/side-bar.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements AfterViewInit {
  @ViewChild('sidebar') sidebar!: SidebarComponent;
  @ViewChild('treeview')
  public treeview!: TreeViewComponent;

  public showBackdrop: boolean = true;
  public type: string = 'Push';
  public width: string = '280px';
  public closeOnDocumentClick: boolean = true;
  public target: string = '.content';
  public data: Object[] = [
    {
      nodeId: '01',
      nodeText: 'Installation',
      iconCss: 'icon-microchip icon',
    },
    {
      nodeId: '02',
      nodeText: 'Deployment',
      iconCss: 'icon-thumbs-up-alt icon',
    },
    {
      nodeId: '03',
      nodeText: 'Quick Start',
      iconCss: 'icon-docs icon',
    },
    {
      nodeId: '04',
      nodeText: 'Components',
      iconCss: 'icon-th icon',
      nodeChild: [
        {
          nodeId: '04-01',
          nodeText: 'Calendar',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-02',
          nodeText: 'DatePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-03',
          nodeText: 'DateTimePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-04',
          nodeText: 'DateRangePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-05',
          nodeText: 'TimePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-06',
          nodeText: 'SideBar',
          iconCss: 'icon-circle-thin icon',
        },
      ],
    },
    {
      nodeId: '05',
      nodeText: 'API Reference',
      iconCss: 'icon-code icon',
      nodeChild: [
        {
          nodeId: '05-01',
          nodeText: 'Calendar',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '05-02',
          nodeText: 'DatePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '05-03',
          nodeText: 'DateTimePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '05-04',
          nodeText: 'DateRangePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '05-05',
          nodeText: 'TimePicker',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '05-06',
          nodeText: 'SideBar',
          iconCss: 'icon-circle-thin icon',
        },
      ],
    },
    {
      nodeId: '06',
      nodeText: 'Browser Compatibility',
      iconCss: 'icon-chrome icon',
    },
    {
      nodeId: '07',
      nodeText: 'Upgrade Packages',
      iconCss: 'icon-up-hand icon',
    },
    {
      nodeId: '08',
      nodeText: 'Release Notes',
      iconCss: 'icon-bookmark-empty icon',
    },
    {
      nodeId: '09',
      nodeText: 'FAQ',
      iconCss: 'icon-help-circled icon',
    },
    {
      nodeId: '10',
      nodeText: 'License',
      iconCss: 'icon-doc-text icon',
    },
  ];
  public field: Object = {
    dataSource: this.data,
    id: 'nodeId',
    text: 'nodeText',
    child: 'nodeChild',
    iconCss: 'iconCss',
  };

  constructor(private sideBarService: SideBarService) {}

  ngAfterViewInit(): void {
    this.sideBarService.sideBarToggleSubject.subscribe((abrir) => {
      if (abrir) this.sidebar.show();
      else this.sidebar.hide();
    });
  }

  closeSideBar() {
    this.sideBarService.toggle();
  }

  public onClose(args: any) {
    this.treeview.collapseAll();
  }

  openClick() {
    if (this.sidebar.isOpen) {
      this.sidebar.hide();
      this.treeview.collapseAll();
    } else {
      this.sidebar.show();
      this.treeview.expandAll();
    }
  }
}
