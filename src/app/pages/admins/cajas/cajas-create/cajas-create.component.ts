import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators , FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Caja } from 'src/app/model/Caja';
import { Payment } from 'src/app/model/Payment';
import { CajaService } from 'src/app/services/caja.service';
import {  ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cajas-create',
  templateUrl: './cajas-create.component.html',
  styleUrls: ['./cajas-create.component.css']
})
export class CajasCreateComponent implements OnInit {

  public  datosCaja: Caja={box_cod:0,box_number:'',box_date:'',box_previous_balance:0,box_current_deposit:0,box_initial_balance:0,box_total_spends:0,box_cash_balance:0,box_status:'En proceso',user_cod:1};
   
  public formEditCaja!:FormGroup;
  construirFormulario(){
    this.formEditCaja= new FormGroup({
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

  constructor(    private fb:FormBuilder, public dialogRef: MatDialogRef<CajasCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:String , private cajaService:CajaService,private toast:ToastrService ) { }

  ngOnInit(): void {
    this.cargarValores();
    this.construirFormulario();

    console.log(this.data)
    this.cajaService.lastBoxData(Number(this.data)).subscribe(
      (response: any ) =>{
        console.log(response);
        this.formEditCaja.setValue(response.caja);
        return this.datosCaja =  response.caja;
      },(error)=>{
        console.log('error',error)
      }

    )

  }
  public cargarValores(){

  }

  public Guardar(){
    let data = this.formEditCaja.value;
    let caja___ = new Caja(0,data.box_number,data.box_date,data.box_previous_balance,data.box_current_deposit,data.box_initial_balance,data.box_total_spends ,data.box_cash_balance,data.box_status,Number(this.data));
    console.log(caja___);
    this.cajaService.createBox(caja___)
    .subscribe( data => {

      this.dialogRef.close(data.resultado);
        
        
    })

  }
  
}
