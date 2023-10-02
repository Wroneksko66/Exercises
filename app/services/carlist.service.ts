import {Injectable} from '@angular/core';
import {Car} from "../model/car.interface";
import {BehaviorSubject, map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarlistService {
  private cars$: BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>([])

  constructor() {
    this.cars$.pipe(tap((allCars:Car[]) =>{
      localStorage.setItem('cars', JSON.stringify(allCars))
    } ))
  }

  getCar(): Observable<Car[]> {
    return this.cars$.asObservable();
  }

  getCarById(id: number) {
    return this.cars$.getValue().find((car) => car.id === id)
  }

  addCar(newCar: Car) {
    const currentValue = this.cars$.getValue()
    currentValue.push(newCar)
    this.cars$.next(currentValue)
  }

  editCar(carToEdit: Car) {
    console.log(carToEdit)
    let allCars = this.cars$.getValue();
    allCars = allCars.map((car: Car) => {
      if (carToEdit.id === car.id) {
        return carToEdit
      }
      return car
    })
    console.log(allCars)
    this.cars$.next(allCars)
  }


  deleteCar(id: number | undefined) {
    if (id !== undefined) {
      let removeCar = this.cars$.getValue();
      removeCar = removeCar.filter((car: Car) => car.id !== id)
      this.cars$.next(removeCar)
    }
  }

  selectCarById(id: number | undefined): Car | undefined {
    const selectedCar = this.cars$.getValue().find((car) => car.id === id)
    return selectedCar
  }
}
