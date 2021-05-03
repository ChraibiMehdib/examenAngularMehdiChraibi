import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ICar } from '../Models/ICar.models';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {

  carForm = new FormGroup({
    marque: new FormControl(''),
    numeroImmatriculation: new FormControl(''),
    nombreSieges: new FormControl(''),
    CouleurVoiture: new FormControl('')
  });

  cars: ICar[] = [];



  constructor() { }

  ngOnInit(): void {
  }

  createcar(){
    let currentCar = new ICar(this.carForm.controls.marque.value,
      this.carForm.controls.numeroImmatriculation.value,
      this.carForm.controls.nombreSieges.value,
      this.carForm.controls.CouleurVoiture.value)
    this.cars.push(currentCar);
    console.log(this.cars.length);
    this.carForm.controls.marque.setValue('');
    this.carForm.controls.numeroImmatriculation.setValue('');
    this.carForm.controls.nombreSieges.setValue('');
    this.carForm.controls.CouleurVoiture.setValue('');
  }

}
