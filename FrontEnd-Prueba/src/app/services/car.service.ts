import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  myAppUrl= 'https://localhost:44394/';
  myApiUrl= 'api/car/';
  list: Car[];
  private updateForm = new BehaviorSubject<Car>({} as any);

  constructor(private http: HttpClient) { }

  saveCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.myAppUrl + this.myApiUrl, car);
  }

  deleteCar(id: number): Observable<Car> {
    return this.http.delete<Car>(this.myAppUrl + this.myApiUrl + id);
  }

//  updateCar(id: number, car: Car):Observable<Car> {
//    return this.http.put<Car>(this.myAppUrl + this.myApiUrl + id, car);
//  }

//  update(car){
//    this.updateForm.next(car);
//  }

 obtainCar$(): Observable<Car> {
   return this.updateForm.asObservable();
 }

 obtainCars() {
   this.http.get(this.myAppUrl + this.myApiUrl, {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })}).toPromise()
                 .then(data => {
                   this.list = data as Car[];
                 }).catch(error => {
                   console.log(error);
                  })
 }

}
