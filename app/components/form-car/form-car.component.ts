import {Component, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Car} from "../../model/car.interface";
import {CarlistService} from "../../services/carlist.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-car',
  templateUrl: './form-car.component.html',
  styleUrls: ['./form-car.component.scss']
})
export class FormCarComponent implements OnInit {
  car: Car | undefined;
  carForm: FormGroup = new FormGroup({})


  constructor(private carList: CarlistService, private route: ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']
    this.car = this.carList.getCarById(id)
    this.initForm()
    console.log(id)
  }
formSubmit(){
    if(!this.car){
      this.addNewCar()
    }
    else{

    }
}
  addNewCar() {
    if (this.carForm.valid) {
      const carForm = this.carForm.getRawValue();

      const newCar: Car = {
        id: Math.floor(Math.random() * 100),
        company: carForm.company,
        model: carForm.model,
        year: carForm.year,
        gearbox: carForm.gearbox,
        course: carForm.course,
        owner: carForm.owner,
        price: carForm.price,
        location: carForm.location
      }
      this.carList.addCar(newCar)
      this.router.navigateByUrl('/carList')
    }
  }
editCar(){
  if(this.carForm.valid)  {
    const carForm = this.carForm.getRawValue();

    const editCar:Car = {
      id: this.car?.id,
      company: carForm.company,
      model: carForm.model,
      year: carForm.year,
      gearbox: carForm.gearbox,
      course: carForm.course,
      owner: carForm.owner,
      price: carForm.price,
      location: carForm.location
    }
    this.carList.editCar(editCar)
    console.log(editCar)
  }

}
  initForm() {
   this.carForm = new FormGroup({
      company: new FormControl("" || this.car?.company),
      model: new FormControl("" || this.car?.model),
      year: new FormControl("" || this.car?.year),
      gearbox: new FormControl("" || this.car?.gearbox),
      course: new FormControl("" || this.car?.course),
      owner: new FormControl("" || this.car?.owner),
      price: new FormControl("" || this.car?.price),
      location: new FormControl("" || this.car?.location),
    })

  }

}
