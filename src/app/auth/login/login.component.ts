import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  SignedIn = false

  constructor(public firebaseService: AuthService,public router: Router ) { }


  canActivate(): boolean {
    if (this.firebaseService.isAuthenticated()) {
      return true;
    }
    return true;
  }
  
  loginForm: any;


  ngOnInit(){ 
    this.loginForm = new FormGroup({
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      
    });
   }

   get email() { return this.loginForm.get('email'); }
   get password() { return this.loginForm.get('password') }


   async Signin(email:string, password:string){
    await this.firebaseService.signin(email,password)
     if(this.firebaseService.isLoggedIn)
       this.SignedIn= true
        // alert("Welcome");
      
  }
  Logout(){
    this.SignedIn = false 
        window.alert("Thank You");
    
  }

}