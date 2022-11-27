import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { ParkingsComponent } from './components/parkings/parkings.component';
import { CreateParking2Component} from './components/create-parking2/create-parking2.component'
import { FormComponent } from './components/form/form.component';
import { ReportComponent } from './components/report/report.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "parkings",
    component: ParkingsComponent
  },
  {
    path: "user",
    component: LoginComponent
  },
  {
    path: "parking",
    component: CreateParking2Component
  },
  {
    path: "newuser",
    component: FormComponent
  },
  {
    path: "newreport",
    component: ReportComponent
  },
  {
    path: "reports",
    component: ReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
