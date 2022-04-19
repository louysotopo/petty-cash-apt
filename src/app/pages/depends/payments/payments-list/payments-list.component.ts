import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { Payment } from 'src/app/model/Payment';
import { User } from 'src/app/model/User';
import { Caja } from 'src/app/model/Caja';
import { MatDialog } from '@angular/material/dialog';
import { PaymentsCreateComponent } from '../payments-create/payments-create.component';
import { PaymentsDeleteComponent } from '../payments-delete/payments-delete.component';
import { PaymentsEditComponent } from '../payments-edit/payments-edit.component';
import { CajaService } from 'src/app/services/caja.service';
import { SpendService } from 'src/app/services/spends.service';
import { ExcelService } from 'src/app/services/excel.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.css']
})
export class PaymentsListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  public headers:string[] = ["Item", "Fecha","Descripcion","Kilometraje", "Galones", "Factura u otros", "Motivo de gasto","Gasto","Acciones"];
  public pagos:Payment[]=[];
  public dataSource= new MatTableDataSource<Payment>();
  
  admin_user:string = "administrador";
  caja: Caja =  new Caja(1,"1","12/02/2022",0,0,0,0,0,"Archivado",1);

  user : User = new User("","","","");

  user__:string=""
  box__:string=""

  public  datosCaja: Caja={box_cod:0,box_number:'',box_date:'',box_previous_balance:0,box_current_deposit:0,box_initial_balance:0,box_total_spends:0,box_cash_balance:0,box_status:'En proceso',user_cod:1};
   
  public formCaja!:FormGroup;
  construirFormulario(){
    this.formCaja= new FormGroup({
      box_cod : new FormControl(''),
      box_number:new FormControl(''),
      box_date:new FormControl(''),
      box_previous_balance : new FormControl(''),
      box_current_deposit : new FormControl(''),
      box_initial_balance : new FormControl(''),
      box_total_spends : new FormControl(''),
      box_cash_balance : new FormControl(''),
      box_status : new FormControl(''),
      user_cod : new FormControl(''),
    })
  }
  

  constructor(
    private router:Router,
    private activateRoute:ActivatedRoute,
    public dialog: MatDialog,
    public cajaService:CajaService,
    public spendService:SpendService,
    public excelService:ExcelService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
    .subscribe((params:any) =>{
       this.user__ = params.id
       this.box__ = params.ed
       console.log(this.user__,this.box__)
      }); 
    this.cargarDatosCaja();
    this.listarPagos();
    this.construirFormulario();
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public cargarDatosCaja(){
    this.cajaService.viewBox(Number(this.box__)).subscribe(
      (response: any ) =>{
        //console.log(response.caja);
        this.caja = response.caja;       
        console.log(response);
        this.formCaja.setValue(response.caja);
        return this.datosCaja =  response.caja;
      },(error)=>{
        console.log('error',error)
      }
    )
  }

  public listarPagos(){
    this.spendService.readSpendsByBox(Number(this.box__)).subscribe(
      (response) =>{
        this.pagos = (response as any).data
        this.dataSource= new MatTableDataSource(this.pagos);
        this.ngAfterViewInit();
      },(error)=>{
        console.log("error"+ error);
      }
    )
    this.dataSource= new MatTableDataSource(this.pagos);
    this.ngAfterViewInit();
  }
  public createPayment(){    
    const dialogRef = this.dialog.open(PaymentsCreateComponent, {
      width:'61%',
      data:this.caja.box_cod
    });
    dialogRef.beforeClosed().subscribe(resultado=>{
      if (resultado == 0 ){
        this.toastr.info("Se ha encontrado otros pagos con la misma factura, cambiarla por favor","Factura duplicada");  

      }
      else if (resultado == 1){
        this.toastr.error("ha ocurrido un error en los datos o servidor","Server Error");

      }
      else {
        this.toastr.success("Se ha registrado exitosamente el gasto","Nuevo Gasto ");
      }
      this.listarPagos();
      this.cargarDatosCaja();
      //window.location.reload();

    });

  } 
  public editPago(pago: Payment){
    const dialogRef = this.dialog.open(PaymentsEditComponent, {
      data:pago,
    });
    dialogRef.beforeClosed().subscribe(resultado=>{

      if (resultado == 0 ){
        this.toastr.info("Se ha encontrado problemas con algunos datos, intentar mas tarde por favor","Error en Servidor");  

      }
      else if (resultado == 1){
        this.toastr.error("Error al acceder a la Base de datos","Server Error");

      }
      else {
        this.toastr.success("Se ha actualizado exitosamente el gasto","Nuevo Gasto ");
      }
      this.listarPagos();
      this.cargarDatosCaja()

    });
  }
  public deletePago(pago: Payment){
    const dialogRef = this.dialog.open(PaymentsDeleteComponent, {
      data:pago,
    });
    dialogRef.beforeClosed().subscribe(resultado=>{
     if (resultado == 1){
        this.toastr.error("Error al acceder a la Base de datos","Server Error");
      }
      else if (resultado == 2)  {
        this.toastr.success("Se ha eliminado exitosamente el gasto","Gasto Eliminado");
      }
      this.listarPagos();
      this.cargarDatosCaja()
      //window.location.reload();

    });
  }
  public exportarExcel(){
    console.log("aqui")  
    this.excelService.exportAsExcelFile(this.caja,this.pagos)
  }

}
