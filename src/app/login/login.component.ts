import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userLogin=new FormGroup({
      userName:new FormControl('',[Validators.required]),
      userPass:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z 0-9]{5,8}$/)])
    })
    userData:any[]=[];
    checkData(){
      console.log(this.userData);
      this.userData=JSON.parse(localStorage.getItem('userInfo'));
      
      for(var i=0;i<this.userData.length;i++){
        console.log(this.userData[i]);
      
        var username=this.userData[i].userName.toLowerCase();
        var userpass=this.userData[i].userPass;
    
       if(username==this.userLogin.value.userName.toLowerCase()&& userpass==this.userLogin.value.userPass){
         this._router.navigate(["/home"]);

       }
      }
    }
  constructor(public _router:Router) { }

  ngOnInit() {
  }

}
