import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { Parking } from '../../interfaces/parking';
import { ParkingsService } from '../../services/parking.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})
export class ParkingsComponent implements OnInit {
parkings!: Parking[];
   constructor(private parkingSrv: ParkingsService,public dialog: MatDialog) { }

  ngOnInit(): void {
  this.parkingSrv.getParkings()
      .pipe(
        tap((parkings: Parking[]) => this.parkings = parkings)
      )
      .subscribe();
  }

}
