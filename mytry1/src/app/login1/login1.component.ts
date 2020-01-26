import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  template: `
    <b class='loginTextLabel'>Username </b>
    <input #usernamebox type='text' class='loginTextbox' >
    <br /><br />
    <b class='loginTextLabel'>Password </b>
    <input #passwordbox type='text' class='loginTextbox'>
    <br /><br />
    <button (click) = "onSubmit(usernamebox.value, passwordbox.value)" style="font-size: 20px;"> Submit </button>
    <br /><br />
    {{showusername}}
    <br /><br />
    {{showpassword}}

  `,
  styleUrls: ['./login1.component.css'],
  styles: [`
    .loginTextbox .loginTextLabel {
      font-size: 20px;
      color: blue;
    }
  `]
})
export class Login1Component implements OnInit {

  public showusername = '';
  public showpassword = '';
  public logindata = {username: '', password: ''};

  onSubmit(usernamev, passwordv) {
    this.logindata = {
      username: usernamev,
      password: passwordv
    };
    if (usernamev !== '' && passwordv !== '') {
      this.showusername = 'the submitted username is ' + this.logindata.username;
      this.showpassword = 'the submitted password is ' + this.logindata.password;
    } else {
      this.showusername = '';
      this.showpassword = '';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
