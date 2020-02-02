import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import{Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
      userInfo=new FormGroup({
        userName:new FormControl('',[Validators.required]),
        userPass:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][0-9 a-z]{5,8}$/)]),
        userEmail:new FormControl('',[Validators.required,Validators.email]),
        userAge:new FormControl('',[Validators.required,Validators.min(18),Validators.max(40)])
      })
     
      
      usercont:object[]=[];

      submitform(){
        console.log(this.userInfo.value);
        this.usercont.push(this.userInfo.value);
        console.log(this.usercont);
        localStorage.setItem('userInfo',JSON.stringify(this.usercont));
        this.userInfo.reset();
      }
  constructor(public _router:Router) { }

  ngOnInit() {
  }

}
