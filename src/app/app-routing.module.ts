import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { CreateParking2Component} from './components/create-parking2/create-parking2.component'

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "parking",
    component: CreateParking2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
