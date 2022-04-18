import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string="http://209.126.124.107:9090/cashers/";

  constructor(private http:HttpClient) { }

  readCashers(){    
    return this.http.get<User[]>(this.url);
  }

}