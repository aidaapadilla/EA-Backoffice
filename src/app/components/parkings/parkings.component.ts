import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Parking } from '../../interfaces/parking';
import { ParkingService } from '../../services/parking.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})

export class ParkingsComponent implements OnInit {
parkings!: Parking[];
   constructor(private parkingSrv: ParkingService,public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  this.parkingSrv.getParkings()
      .pipe(
        tap((parkings: Parking[]) => this.parkings = parkings)
      )
      .subscribe();
  }

  cancelOneParking(parking: Parking): void {
    this.parkingSrv.deleteParking(parking._id!).subscribe({
      next: data => {
        console.log(data);
      }, 
      error: error => {
      console.log(error);
      }
    })
  }
  goToUserList() {
    this.router.navigate(['/', 'users']);
  }
  goToAddParking() {
    this.router.navigate(['/', 'parking']);
  }
  goToParkingList() {
    this.router.navigate(['/', 'parkings']);
  }
  goToAddReport() {
    this.router.navigate(['/', 'newreport']);
  }
  goToReportList() {
    this.router.navigate(['/', 'reports']);
  }
  goToLogOff(){
    this.router.navigate(['/', 'user']);
  }
}
