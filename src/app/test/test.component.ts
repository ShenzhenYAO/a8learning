// tslint:disable-next-line: jsdoc-format
/**import angular core modules.*/
import { Component, OnInit } from '@angular/core';

/**In the following decorator:
 * define the target tag (<app-test>). Note, the target tag is originally in app.component.html.
 *  But the target tag is inserted into index.html.
 *  As such it is in index.html after all initialzation is done (hence need the module OnInit)
 *
 * The class 'TestComonent is exported and imported by app.module, then packed into AppModule. The latter is
 * exported to main.ts, which injects html contents into index.html.
 */

@Component({
  // tslint:disable-next-line: component-selector
  selector: '.app-test', // as a class name
  // selector: 'app-test' // as a tag name
  // selector: '[app-test]' // as an attribute
  // templateUrl: './test.component.html', // from a file
  // template: '<div>from template directly', // from html directly
  template: `
    <div>
      <p>from html of multiple lines 1</p>
      <p>from html of multiple lines 2</p>
    </div>
  `,
  // styleUrls: ['./test.component.css'] // from a file
  styles: [`
    div {
      color:red;
    }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
