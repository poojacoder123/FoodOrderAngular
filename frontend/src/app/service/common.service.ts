import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from '../shared/user';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient : HttpClient) { }

  registerUser(user: userModel) : Observable<userModel>{
    return this.httpClient.post<userModel>(environment.apiUrl + "user", user);
  }
  getUser() : Observable<userModel>{
    return this.httpClient.get<userModel>(environment.apiUrl +"user" );
  }
  loginUser(user: userModel) : Observable<userModel>{
    return this.httpClient.post<userModel>(environment.apiUrl + "user/login", user);
  }

  getUserById(id: string) : Observable<userModel>{
    return this.httpClient.get<userModel>(environment.apiUrl + 'user/' + id);
  }
}
