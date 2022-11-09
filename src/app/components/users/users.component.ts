import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  constructor(private userSrv: UsersService,public dialog: MatDialog) { }


  ngOnInit(): void {
    this.userSrv.getUsers()
    .pipe(
      tap((users: User[]) => this.users = users)
    )
    .subscribe();

    
  }
  deleteOneUser(user: User): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: {name: user.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.userSrv.delete(user.name).subscribe(
          data =>  { if(data.name == user.name){
            this.users = this.users.filter(usr => usr.name != data.name)
          }}
        );
      }
    });
  }

  updateOneUser(user: User): void {
    let newName = (<HTMLInputElement>document.getElementById("newName")).value;
    let newEmail = (<HTMLInputElement>document.getElementById("newEmail")).value;
    console.log(newName);
    console.log(newEmail);
    const editedUser: User = {
      _id: user._id,
      name: newName,
      email: newEmail,
      password: user.password,
      points: user.points,
      myBookings: user.myBookings,
      myFavourites: user.myFavourites,
      myOpinions: user.myOpinions,
      myParkings: user.myParkings
    } 
    this.userSrv.updateUser(editedUser, user._id!).subscribe({
      next: data => {
        console.log(data);
      }, 
      error: error => {
      console.log(error);
      }
    })
  }

  userAdd(user: User): void{
      this.userSrv.addUser(user).subscribe(
        data => {if(data.name == user.name){
          this.users.push(data);
        }}
      )
  }

}
