import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ParkingComponent} from './components/create-parking/create-parking.component'

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "parking",
    component: ParkingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
