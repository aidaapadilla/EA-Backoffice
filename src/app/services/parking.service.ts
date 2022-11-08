import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parking } from 'src/app/interfaces/parking';

@Injectable({
    providedIn: 'root'
})
export class ParkingService {
    url = 'http://localhost:5432/api/parkings';

    constructor(private http: HttpClient) { }

    addParking(parking: Parking): Observable<Parking> {
        return this.http.post<Parking>(this.url + '/', parking);
    }

}