import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  @Input() user!: User
  @Output() deleteUser = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }

}
