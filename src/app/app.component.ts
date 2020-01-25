// tslint:disable-next-line: jsdoc-format
/**https://www.youtube.com/watch?v=16rQyEQtpyQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=4
 * The component.ts file contains
 * 1. Metadata with information, and a decorator
 * 2. A class with Code in typescript, containing data and methods
 *
 * In the following, the program first load the module 'Component' from @angular/core
 * Next, it decorate the module with meta data. Specifically, it defines the following:
 * 1) which html element (by tagname, class, or id) to insert the prepared html contents.
 *    This is fulfilled by 'selector'
 * 2) where the html contents are obtained, templateUrl (the source html contents)
 *    This is fulfilled by 'templateUrl'
 * 3) what css style to apply
 *    This is fulfilled by 'styleUrls'
 * Finally, it exports a class called AppComponent. A field 'title' has be defined there, in the following example.
 *
 * The exported class AppComponent is imported in app.module.ts, and is declared in that file as metadata in @NgModule.
 * (The decorated NgModule is exported as the class AppModule, which is imported by main.ts.
 * It is the main.ts that enables inserting web contents into the defined tag in index.html.
 * In this case, the tag is <app-root> )
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world title';
}
