import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { LogIn } from '../interfaces/logIn.interface';
import {User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user!: User;
  message!: String;
  private userSource = new BehaviorSubject(this.user);
  currentUser = this.userSource.asObservable();
  private apiURL = 'http://localhost:5432/api/users/';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> { //BARTO
    return this.http.get<User[]>(this.apiURL);
  }
  delete(user: string): Observable<User> { //BARTO
    return this.http.delete<User>(this.apiURL + 'delete/' + user)

  }

  logIn(userData:LogIn): Observable<HttpResponse<User>>{
    return this.http.post<User>(this.apiURL + 'login/', userData, {observe: 'response'})
  }

  newUserLogged(user: User) {
    //console.log("user a service: " + JSON.stringify(user));
    this.userSource.next(user);
  }

  addUser(user: User): Observable<User> { //BARTO
    return this.http.post<User>(this.apiURL + 'register/', user)

  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(this.apiURL + '/delete/' + id);
  }
}
