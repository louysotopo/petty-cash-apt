import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';

import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sesion-login',
  templateUrl: './sesion-login.component.html',
  styleUrls: ['./sesion-login.component.css']
})
export class SesionLoginComponent implements OnInit {
  //user_ : User={"email":"","name":""}
  constructor(    
    private router:Router,
    private auth: AuthService,
    private loginservice: LoginService,
    private toast:ToastrService
  ) { }

  ngOnInit(): void {
  }
  public goAdmin(){    
    this.router.navigate(["/admin"]);    
  }
  async verification(){
    try{
      await this.auth.googleAuth()
      .then( data => {         

        this.searching(data.user?.email);       
        
      });
    }catch(e:any){
      this.toast.error("Problemas con el internet y los servicios de google")
    }
  }
  searching(email:any){
    this.loginservice.authLogin({"email":email}).subscribe( data =>{
      if (data.usuario.user_category == "administrador"){
        
        this.router.navigate(["/admin"]);
      }
      else if (data.usuario.user_category == "cajero"){
        this.toast.info("cajero");
        console.log(data.usuario.user_id);
        //this.router.navigate(["/depends",data.usuario.user_id]);
      }
      else{
        this.toast.info("El correo electronico no se encuentra registrado en el sistema");
      }
    },error=>{
      console.log(        
        this.toast.error("Error al acceder a la base de datos")
      )
    } 
    )
  }

}
