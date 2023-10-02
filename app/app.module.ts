import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {SharedModule} from "../modules/shared/shared.module";
import { CarlistComponent } from './components/carlist/carlist.component';
import { FormCarComponent } from './components/form-car/form-car.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ModalCarComponent } from './components/modal-car/modal-car.component';
import {MatDialogModule} from "@angular/material/dialog";
import { Exercise2Component } from './components/exercise2/exercise2.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarlistComponent,
    FormCarComponent,
    ModalCarComponent,
    Exercise2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
