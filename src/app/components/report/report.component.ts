import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Report } from 'src/app/interfaces/report.interface';
import { ReportsService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  report!: Report;
  @Output() addReport = new EventEmitter<Report>();
  reportForm = new FormGroup({
    reportingUser: new FormControl(),
    description: new FormControl(),
    type: new FormControl()
  })
  
  constructor(private _fb: FormBuilder, private _reportService: ReportsService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.report=<Report>this.reportForm.value;
    this._reportService.addReport(this.report).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    })
    location.reload();
  }
}
