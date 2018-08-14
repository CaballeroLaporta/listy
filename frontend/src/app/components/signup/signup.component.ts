import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string;
  password: string;
  email: string;
  
    constructor( 
      private authService: AuthService,
      private router : Router
      ) { }
  
    ngOnInit() {
    }
  
    submitForm(form) {
      this.authService.signup({
          username: this.username,
          password: this.password,
          email: this.email
      })
      .then(()=> {
          this.router.navigate(['/'])
      })
      .catch(error => {
          console.log(error)
      })  
    }
  
  }
