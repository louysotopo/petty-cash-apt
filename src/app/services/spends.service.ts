import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Caja } from '../model/Caja';
import { Payment } from '../model/Payment';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpendService {

  url:string="http://209.126.124.107:9090/spendsByBox/";

  constructor(private http:HttpClient) { }

  readSpendsByBox(id_:Number){    
    return this.http.post<Payment[]>(this.url,{"box_cod":id_});
  }
  createSpend(spend_:Payment){
      let ruta_create = "http://209.126.124.107:9090/spendAdd/";
      return this.http.post<any>(ruta_create,spend_);
  }
  viewSpend(id_: Number){
    let ruta_create = "http://209.126.124.107:9090/spendsDetail/";
      return this.http.post<Payment>(ruta_create,{"spend_cod":id_});
  }
  editSpend(spend_:Payment ){
    let ruta_create = "http://209.126.124.107:9090/spendEdit/";
    return this.http.post<any>(ruta_create,spend_);
  }
  deleteSpend(spend_: Payment){
    let ruta_create = "http://209.126.124.107:9090/spendDelete/";
    return this.http.post<any>(ruta_create,spend_)
  }

  
}