import { Component, OnInit, ViewChild} from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { Payment } from 'src/app/model/Payment';
import { User } from 'src/app/model/User';
import { Caja } from 'src/app/model/Caja';
import { MatDialog } from '@angular/material/dialog';
import { PaymentsCreateComponent } from '../../payments/payments-create/payments-create.component'; 
import { CajasCreateComponent } from '../cajas-create/cajas-create.component';
import { CajasDeleteComponent } from '../cajas-delete/cajas-delete.component';
import { CajasEditComponent } from '../cajas-edit/cajas-edit.component';
import { CajaService } from 'src/app/services/caja.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cajas-list',
  templateUrl: './cajas-list.component.html',
  styleUrls: ['./cajas-list.component.css']
})

export class CajasListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public headers:string[] = ["N", "Fecha de Deposito","Saldo restante","Total Gastos", "Estado", "Acciones"];
  public cajas:Caja[]=[];
  public dataSource= new MatTableDataSource<Caja>();
  user__: String=""
  
  admin_user:string = "administrador";
  constructor(    private router:Router,
    private activateRoute:ActivatedRoute,
    public dialog: MatDialog,
    public cajasService:CajaService,
    private toast:ToastrService 
    ) { }

  ngOnInit(): void {
    this.activateRoute.params
    .subscribe((params:any) =>{
       this.user__ = params.id
       console.log(this.user__)
      });

    this.listarCajas();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  public listarCajas(){
    this.cajasService.readBoxesByUser(this.user__).subscribe(   (response)=>{
      this.cajas = (response as any).data
      this.dataSource= new MatTableDataSource(this.cajas);
      this.ngAfterViewInit();
    },
    (error) =>{
      console.log("error"+ error);
    })

  }

  public createCaja(){
    const dialogRef = this.dialog.open(CajasCreateComponent, {
      width:'61%',
      data:this.user__,
    });
    dialogRef.beforeClosed().subscribe(result=>{
      console.log(result);
      if (result == 0  ){
        this.toast.info("Se han encontrado cajas aun en Proceso ","Culminar todas las cajas antes de crear una nueva");
      }
      else if (result == 1 ){
        this.toast.info("Se obtuvo un problema , intentar mas tarde ","Error en datos");
      }
      else{
        this.toast.success("Se ha registrado exitosamente la caja","Nueva Caja");
      }
      this.listarCajas();
      this.ngAfterViewInit();
    });
  }
  
  public editCaja(caja:Caja){
    const dialogRef = this.dialog.open(CajasEditComponent, {
      width:'61%',
      data:caja

    });
    dialogRef.beforeClosed().subscribe(result=>{
      if (result == 0  ){
        this.toast.info("Se han encontrado un error en los datos ingresados ","error en Base de Datos");
      }
      else if (result == 1 ){
        this.toast.info("error al encontrar la caja a editar","Error en Base de Datos");
      }
      else{
        this.toast.success("Se ha actulizado exitosamente la caja","Caja Actualizada");
      }

      this.listarCajas();
      this.ngAfterViewInit();                       

    });
  }
  
  public viewCaja(caja:Caja){
      this.router.navigate(["admin/user",Number(this.user__),"caja",caja.box_cod]); 
  }

  public deleteCaja(caja:Caja) {
    const dialogRef = this.dialog.open(CajasDeleteComponent, {
     data:caja
    });
    dialogRef.beforeClosed().subscribe(result=>{
      
      if (result == 1 ){
        this.toast.info("Se obtuvo un problema , intentar mas tarde ","Error en datos");
      }
      else if (result == 2 ){
        this.toast.success("Se ha eliminado exitosamente la caja","Caja eliminada");
      }

      this.listarCajas();    
      this.ngAfterViewInit();                   

    });
  }
}

