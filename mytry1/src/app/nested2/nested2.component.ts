import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested2',
  templateUrl: './nested2.component.html',
  template: `
    <h1>
      The nested components from '{{nested2title}}' is injected!
      <br />
      {{"The name of the nested is " + nested2title}}
      <br />
      {{len_nested2title}}
      <br />
      {{"The name in uppercase is " + nested2title.toUpperCase()}}
      <br />
      {{interpolationbyfunction()}}
      <br />
      {{url_thispage}}
      <br />
      <input [disabled] = "isDisable" type="{{inputType}}" value = "defaultInputValue" >
      <br />
      <button (click) = "onClick()">Click it </button>
      {{greetingmsg}}
      <br />
      <button (click) = "onClick2($event)">Show click type </button>
      {{greetingmsg2}}
    </h1>
  
  `,
  styleUrls: ['./nested2.component.css']
})
export class Nested2Component implements OnInit {

  constructor() { }

  nested2title = 'nested2';
  // tslint:disable-next-line: variable-name
  len_nested2title = 'The length property of the variable = ' + this.nested2title.length;
  // tslint:disable-next-line: variable-name
  url_thispage = window.location.href;

  public isDisable = false;
  public inputType = 'text';

  public greetingmsg = '';
  public greetingmsg2 = '';

  onClick() {
    if (this.greetingmsg === 'button clicked') {
      this.greetingmsg = '';
    } else {
      this.greetingmsg = 'button clicked';
    }
  }

  onClick2(event) {
    this.greetingmsg2 = event.type;
  }

  interpolationbyfunction() {
    return 'This message is from a function for ' + this.nested2title;
  }

  ngOnInit() {
  }

}
