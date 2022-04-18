import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/User';


import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public headers:string[] = ["N", "Email","Nombre","Total Cajas", "Acciones"];

  public users:User[]=[];
  public dataSource= new MatTableDataSource<User>();  
  admin_user:string = "administrador";

  constructor(    
    private router:Router,
    private auth: AuthService,
    private userService: UserService
    ) { }

  ngOnInit(): void {

    this.listarUsers();

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  public listarUsers(){

    this.userService.readCashers().subscribe( (response) =>{
      this.users = (response as any).data
      this.dataSource= new MatTableDataSource(this.users);
          this.ngAfterViewInit();
    },error =>{
      console.log("error"+ error);
    }
    )

  }
  public goCajasByUser(user__:User){    
    this.router.navigate(["admin/user/"+user__.user_id+"/cajas"]);    
  }

}
