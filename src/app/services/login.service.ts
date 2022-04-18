import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://209.126.124.107:9090/login/";

  constructor(private http:HttpClient) { }

  authLogin(form:any ):Observable<any>{    
    return this.http.post(this.url,form);
  }

}