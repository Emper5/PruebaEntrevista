import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent implements OnInit{

  constructor(private jwtHelper: JwtHelperService, private router:Router) {

  }
  ngOnInit(): void {
 
   }

   logout() {
     localStorage.removeItem('jwd');
     this.router.navigate(['login']);
   }

  
}
