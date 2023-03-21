import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { NewUser, User, UsersResponse } from 'src/types/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl ='https://dummyjson.com/users';
  private apiUrlAdd ='https://dummyjson.com/users/add';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UsersResponse>{
    return this.http.get<UsersResponse>(this.apiUrl);
  }

  addUser(user: NewUser): Observable<User>{
    return this.http.post<User>(this.apiUrlAdd, user)
  }
}
