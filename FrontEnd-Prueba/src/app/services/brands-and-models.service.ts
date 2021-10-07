import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class BrandsAndModelsService {

  apiUrl: string = 'https://the-vehicles-api.herokuapp.com/'
  private updateSelect = new BehaviorSubject<Car>({} as any);

  constructor(private http: HttpClient) { }

  getBrands():Observable<any> {
    return this.http.get(this.apiUrl + 'brands');
  }

  getmodels(id: number):Observable<any> {
    return this.http.get(this.apiUrl + '/models?brandId=' + id);
  }  

  obtainCar$(): Observable<Car> {
    return this.updateSelect.asObservable();
  }
}
