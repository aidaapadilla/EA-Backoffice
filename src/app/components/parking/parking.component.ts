import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Parking } from 'src/app/interfaces/parking';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  @Input() parking!: Parking
  constructor() { }

  ngOnInit(): void {
  }

}
