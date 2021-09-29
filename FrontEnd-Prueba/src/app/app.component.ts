import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'FrontEnd-Prueba';
  constructor(private jwtHelper: JwtHelperService, private router:Router) {

  }
  ngOnInit(): void {
    if(!this.isUserAuthenticated()) {
     this.router.navigate(['login']);
    }
   }

 
   isUserAuthenticated() {
     const token: string = localStorage.getItem('jwd');
     if (token && !this.jwtHelper.isTokenExpired(token)) {
       return true;      
     } else{
       return false;
     }
   }
 

  }
