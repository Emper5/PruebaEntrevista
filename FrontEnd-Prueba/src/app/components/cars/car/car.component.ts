import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/models/car';
import { BrandsAndModelsService } from 'src/app/services/brands-and-models.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html'
})
export class CarComponent implements OnInit, OnDestroy {

  form: FormGroup;
  suscription: Subscription
  car: Car;
 
  brands: any[] = [];
  idBrand: number = 0;
  models: any[] = [];
  
  constructor(private formBuilder: FormBuilder,
              private carService: CarService,
              private toastr: ToastrService,
              private brandsAndModelsService: BrandsAndModelsService
              ) { 
    this.form = this.formBuilder.group({
      id: 0,
      brand: ['',[Validators.required]],
      model: ['',[Validators.required]],
      year: ['',[Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(1900), Validators.max(2021)]],
      price: ['',[Validators.required, Validators.pattern('[0-9]*')]]
    })
  }
  
  ngOnInit(): void {

    this.suscription = this.carService.obtainCar$().subscribe(data => {
      this.car = data;
      this.form.patchValue({
        brand: this.car.brand,
        model: this.car.model,
        year: this.car.year,
        price: this.car.price
      });
    });

    this.brandsAndModelsService.getBrands()
      .subscribe(data => {
        this.brands = data;

        this.brands.unshift({
          brand: 'Select Brand',
          id: ''

        })
      })

  }

   

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }
  

  saveCar() {
      this.add();
  }

  add() {
    const car: Car = {
      brand: this.form.get('brand').value.brand,
      model: this.form.get('model').value.model,
      year: this.form.get('year').value,
      price: this.form.get('price').value
    }
    console.log(car)
    this.carService.saveCar(car).subscribe(data => {
      this.toastr.success('Data saved correctly', 'The car was saved');
      this.carService.obtainCars();
      this.form.reset();
      this.idBrand = 0;
    })
  }

  // edit() {
  //   const car: Car = {
  //     id: this.car.id,
  //     brand: this.form.get('brand').value,
  //     model: this.form.get('model').value,
  //     year: this.form.get('year').value,
  //     price: this.form.get('price').value,
  //   }
  //   this.carService.updateCar(this.idCar, car).subscribe(data => {
  //     this.toastr.info("Data updated correctly", "The car was updated");
  //     this.carService.obtainCars();
  //     this.form.reset();
      
  //   })

    
  //}
  getModelsByBrandId() {
    const brand = this.form.get('brand').value;
    this.brandsAndModelsService.getmodels(brand.id)
        .subscribe(data => {
          this.models = data;  
          this.models.unshift({
            model: 'Select Model',
            id: ''
          });
         });
  }
}