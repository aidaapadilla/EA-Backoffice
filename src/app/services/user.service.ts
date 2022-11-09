import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiURL = 'http://localhost:5432/api/users/';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
  }
  delete(id: string): Observable<User> {
    return this.http.delete<User>(this.apiURL + id);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL + 'register/', user)
  }

  updateUser(user: User, id: string): Observable<User> {
    console.log(id);
    console.log(user);
    return this.http.put<User>(this.apiURL + 'update/' + id, user)
  }

  /* deleteUser(id: string): Observable<User> { 
    return this.http.delete<User>(this.apiURL + 'delete/' + id);
  } */
}
