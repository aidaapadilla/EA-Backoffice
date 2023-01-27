import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConnectableObservable, tap } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/user.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];
  constructor(private userSrv: UsersService,public dialog: MatDialog, private router: Router) { }


  ngOnInit(): void {
    this.userSrv.getUsers()
    .pipe(
      tap((users: User[]) => this.users = users)
    )
    .subscribe();

    
  }
  deleteOneUser(user: User): void {
    this.userSrv.delete(user._id!).subscribe(
      data =>  { if(data._id == user._id){
        this.users = this.users.filter(usr => usr._id != data._id)
      }}
    );
  }

  userAdd(user: User): void{
      this.userSrv.addUser(user).subscribe(
        data => {if(data.name == user.name){
          this.users.push(data);
        }}
      )
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
