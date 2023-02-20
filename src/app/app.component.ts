import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "form practice";
  // userLogin(arg: any){
  //   console.log(arg);
  // }
  // loginFrom = new FormGroup({
  //   user:new FormControl('',[Validators.required,Validators.email]),
  //   password:new FormControl('',[Validators.required,Validators.minLength(5)]),
  // })
  // loginUser(){
  //   console.log(this.loginFrom.value);
  // }
  // get userValidator(){
  //   return this.loginFrom.get('user');
  // }
  // get passwordValidation(){
  //   return this.loginFrom.get('password');
  // }

}


