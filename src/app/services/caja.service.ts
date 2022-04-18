import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Caja } from '../model/Caja';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CajaService {

  url:string="http://209.126.124.107:9090/boxesByUser/";

  constructor(private http:HttpClient) { }

  readBoxesByUser(id_:String){    
    return this.http.post<Caja[]>(this.url,{"user_cod":id_});
  }
  createBox(box_:Caja){
      let ruta_create = "http://209.126.124.107:9090/boxAdd/";
      return this.http.post<any>(ruta_create,box_);
  }
  viewBox(id_: Number){
    let ruta_create = "http://209.126.124.107:9090/boxDetail/";
      return this.http.post<Caja>(ruta_create,{"box_cod":id_});
  }
  editBox(box_:Caja ){
    let ruta_create = "http://209.126.124.107:9090/boxEdit/";
    return this.http.post<any>(ruta_create,box_);
  }
  deleteBox(id_:Number){
    let ruta_create = "http://209.126.124.107:9090/boxDelete/";
    return this.http.post<any>(ruta_create,{"box_cod":id_})
  }
  lastBoxData(id_:Number){
    let ruta_create = "http://209.126.124.107:9090/LastBoxData/";    
    return this.http.post<Caja>(ruta_create,{"user_cod":id_});
  }

  
}