import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 

import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:User = new User();
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {}

  response(response): void{
    if(response.success===false){
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;
    }

    if(response.success===true){
      
    }
  }

  onSubmit(): void{
    
console.log(this.user);

    this.authService.logIn(this.user).subscribe(
      (response) => {
        //this.response(response);
        console.log(response);
      }
    );
  }

}
