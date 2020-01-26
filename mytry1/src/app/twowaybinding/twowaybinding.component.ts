import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  // the two way binding of div elements were found at:
  // https://stackoverflow.com/questions/35378087/how-to-use-ngmodel-on-divs-contenteditable-in-angular2
  template: `
    <h2>real two way binding of an input element</h2>
    <input [(ngModel)]="inputcontents" type="text" >
    {{inputcontents}}

    <h2> two way binding of div elements</h2>
    <div class="textbox" contenteditable = "true"
      [textContent] = "divcontents"
      (input) = "divcontents = $event.target.textContent"
    ></div>
    <div class="textbox" >{{divcontents}}</div>
  `,
  styleUrls: ['./twowaybinding.component.css'],
  styles: [`
    .textbox {
      width: 300px;
      height: 100px;
      border-style: solid;
      border-width: 1px;
    }
  `]
})
export class TwowaybindingComponent implements OnInit {
  public inputcontents = '';
  public divcontents = '';

  constructor() { }

  ngOnInit() {
  }

}
