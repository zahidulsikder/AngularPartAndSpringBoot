import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:8085";
  constructor(private httpClient: HttpClient) { }

  public createuser(user: any) {
    return this.httpClient.post(`${this.baseUrl}/usersave`, user);

  }
  
  getAllUser():Observable<User>{
    return this.httpClient.get<User>(this.baseUrl+"/user/all");
   }


}
