import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-parking2',
  templateUrl: './create-parking2.component.html',
  styleUrls: ['./create-parking2.component.css']
})
export class CreateParking2Component implements OnInit {

  constructor() { }

  ngOnInit(): void { //Podem guardar el usuari complet al token
  } 

}
