import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(public carService: CarService,
              public toastr: ToastrService) { }

  ngOnInit(): void {
    this.carService.obtainCars();
  }
  deleteCar(id:number) {
    if(confirm('Are you sure you want delete this car?')){
      this.carService.deleteCar(id).subscribe(data => {
                                    this.toastr.warning('Data deleted correctly', 'The car was deleted')
                                    this.carService.obtainCars();
      })
    }
  }

  // edit(car) {
  //   this.carService.update(car);
  // }
}
