import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from 'src/app/interfaces/report.interface';
import { ReportsService } from 'src/app/services/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  listReports: Report[] = [];
  myRadio: string = ''

  constructor(private _reportService: ReportsService, private router: Router) { }

  ngOnInit(): void {
    this.getReports();
  }

  getReports() {
    this._reportService.getReports().subscribe(data => {
      this.listReports = data;
    }, error => {
      console.log(error);
    }
    )
  }

  deleteReport(id: string) {
    const confirmDelete = confirm("Report "+ id +" will be deleted, do you want to continue?");
    if(confirmDelete){
      this._reportService.deleteReport(id).subscribe(data => {
        this.getReports();
      }, error => {
        console.log(error);
      })
    } 
    location.reload();
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
