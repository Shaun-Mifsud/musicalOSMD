import { Component } from '@angular/core';
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ngOnInit () {
    const container = document.getElementById("sheetMusic");
    const osmd = new OpenSheetMusicDisplay(container, {
      autoResize: true, // just an example for an option, no option is necessary.
      backend: "svg",
      drawTitle: true,
      // put further options here
    });
    
}
}
