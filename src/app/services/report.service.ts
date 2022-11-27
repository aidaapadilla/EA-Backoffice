import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Report } from '../interfaces/report.interface';

@Injectable({
  providedIn: 'root'
})

export class ReportsService {
    report!: Report;
    message!: String;
    private userSource = new BehaviorSubject(this.report);
    currentUser = this.userSource.asObservable();
    private apiURL = 'http://localhost:5432/api/reports/';
    constructor(private http: HttpClient) { }
  
    // OK
    getReports(): Observable<Report[]> {
      return this.http.get<Report[]>(this.apiURL);
    }
  
    // OK
    deleteReport(id: string): Observable<Report> {
      console.log(id);
      return this.http.delete<Report>(this.apiURL + id);
    }
  
    // OK
    addReport(report: Report): Observable<Report> {
      console.log(report);
      return this.http.post<Report>(this.apiURL, report)
    }
  
    // OK
    updateStatus(report: Report, id: string): Observable<Report> {
      console.log(id);
      console.log(report);
      return this.http.put<Report>(this.apiURL + '/status/' + id, report)
    }
  }