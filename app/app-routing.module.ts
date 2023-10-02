import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarlistComponent} from "./components/carlist/carlist.component";
import {FormCarComponent} from "./components/form-car/form-car.component";
import {Exercise2Component} from "./components/exercise2/exercise2.component";

const routes: Routes = [
  {path: 'carList', component:CarlistComponent},
  {path:'addCar', component:FormCarComponent},
  {path:'editCar/:id', component:FormCarComponent},
  {path:'exercise2', component:Exercise2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
