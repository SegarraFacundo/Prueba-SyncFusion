import { Component, OnInit } from '@angular/core';
import { createSpinner, showSpinner } from '@syncfusion/ej2-popups';

@Component({
  selector: 'app-loading-data',
  templateUrl: './loading-data.component.html',
  styleUrls: ['./loading-data.component.scss'],
})
export class LoadingDataComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //createSpinner() method is used to create spinner
    let container = document.getElementById('container');

    if (container != null) {
      createSpinner({
        // Specify the target for the spinner to show
        target: container,
      });

      // showSpinner() will make the spinner visible
      showSpinner(container);
    }
  }
}
