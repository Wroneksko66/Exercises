import {Component, OnInit} from '@angular/core';
import {CarlistService} from "../../services/carlist.service";
import {Car} from "../../model/car.interface";
import {MatDialog} from "@angular/material/dialog";
import {ModalCarComponent} from "../modal-car/modal-car.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.scss']
})
export class CarlistComponent implements OnInit {
  cars: Car[] = []

  constructor(private carList: CarlistService,
              public dialog: MatDialog,
              private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.carList.getCar().subscribe(
      (car) => {
        this.cars = car
      }
    )
  }

  deleteCar(id: number | undefined) {
    this.carList.deleteCar(id)
  }

  openDialog(id: number | undefined): void {
    const dialogRef = this.dialog.open(ModalCarComponent, {
      data: this.carList.selectCarById(id)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
