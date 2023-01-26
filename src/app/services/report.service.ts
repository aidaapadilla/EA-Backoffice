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
    deleteReport(_id: string): Observable<Report> {
      return this.http.delete<Report>(this.apiURL + _id);
    }

    addReport(report: Report): Observable<Report> {
      return this.http.post<Report>(this.apiURL, report)
    }
  }