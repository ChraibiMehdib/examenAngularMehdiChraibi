import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CarsComponent } from './cars/cars.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCarComponent,
    CarsComponent,
    CarsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
