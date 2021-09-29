import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsAndModelsService {

  apiUrl: string = 'https://the-vehicles-api.herokuapp.com/'

  constructor(private http: HttpClient) { }

  getBrands():Observable<any> {
    return this.http.get(this.apiUrl + 'brands');
  }

  getmodels(id: number):Observable<any> {
    return this.http.get(this.apiUrl + '/models?brandId=' + id);
  }  
}
