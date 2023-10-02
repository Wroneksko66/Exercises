import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Car} from "../../model/car.interface";
import {CarlistService} from "../../services/carlist.service";

@Component({
  selector: 'app-modal-car',
  templateUrl: './modal-car.component.html',
  styleUrls: ['./modal-car.component.scss']
})
export class ModalCarComponent implements OnInit {
  car: Car | undefined

  constructor(
    public dialogRef: MatDialogRef<ModalCarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car,
    private carList: CarlistService
  ) {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
