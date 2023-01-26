import { Component, OnInit } from '@angular/core';
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

  constructor(private _reportService: ReportsService) { }

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

}
