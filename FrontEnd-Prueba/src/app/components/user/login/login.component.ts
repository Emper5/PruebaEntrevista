import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(private router: Router, 
              private http: HttpClient) { }

  login(form: NgForm){
    const credentials = {
      'username': form.value.username,
      'password': form.value.password
    }

    this.http.post('https://localhost:44394/api/auth/login', credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })})
      .subscribe(response => {
        const token = (<any>response).token;
        localStorage.setItem('jwt', token),
        this.invalidLogin = false;
        this.router.navigate(['cars']);
      }, err => {
        this.invalidLogin = true;
      })
  }

}
