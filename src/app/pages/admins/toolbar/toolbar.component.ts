import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  name:string|null = 'Administrador'
  constructor(
    private router:Router,
    public auth_:AuthService
    ) { 
      this.auth_.devolverUsuario()
      .then(data =>{
        if (data != null ){
          this.name = data.displayName;
        }else{
          this.router.navigate([''])
        }        
      });
    }
  ngOnInit(): void {
  }
  
  public async logOut(){
    try{
      await this.auth_.logOut()
      .then(data =>{
        console.log(data);
        this.router.navigate([''])
      })
      
    }catch (e:any) {
      alert(e.message)
    }
  }
}
