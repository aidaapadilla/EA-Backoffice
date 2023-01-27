import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parking } from 'src/app/interfaces/parking';

@Injectable({
    providedIn: 'root'
})
export class ParkingService {
    url = 'http://localhost:5432/api/parkings/';

    constructor(private http: HttpClient) { }

    // OK
    getParkings(): Observable<Parking[]> {
      return this.http.get<Parking[]>(this.url);
    }

    // torna auth true pero no el crea
    addParking(parking: Parking): Observable<Parking> {
        return this.http.post<Parking>(this.url + 'office', parking);
    }

    // fet pero no testejat
    deleteParking(id: string): Observable<Parking> {
        return this.http.delete<Parking>(this.url + id);
    }
}
