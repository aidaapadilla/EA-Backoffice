import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';
import { Validators } from '@angular/forms';
import { Parking } from 'src/app/interfaces/parking';

@Component({
  selector: 'app-create-parking2',
  templateUrl: './create-parking2.component.html',
  styleUrls: ['./create-parking2.component.css']
})
export class CreateParking2Component implements OnInit {
  parking!: Parking;
    @Output() addParking = new EventEmitter<Parking>();
    parkingForm = new FormGroup({
        //country: new FormControl('', Validators.required), //En parking.ts he de posar el que falta
        //city: new FormControl('', [Validators.required]),
        //street: new FormControl('', [Validators.required]), // Validators.min(6)
        //spotNumber: new FormControl('', [Validators.required]),
        type: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required]), //Number
        size: new FormControl('', [Validators.required]),
        difficulty: new FormControl('', [Validators.required, Validators.max(2)]), //Number
        score: new FormControl('', [Validators.required]) //Number
    })
  constructor() { }

  ngOnInit(): void { //Podem guardar el usuari complet al token
  } 
  onSubmit() {// Buscar com fer la conversio
    //this.parking = new Parking(this.parkingForm.value.type, this.parkingForm.value.price,this.parkingForm.value.size,this.parkingForm.value.difficulty,this.parkingForm.value.score) 
    //this.parking = <Parking>this.parkingForm.value
    this.addParking.emit(this.parking);
  }

}
