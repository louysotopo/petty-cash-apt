import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Caja } from 'src/app/model/Caja';
import { CajaService } from 'src/app/services/caja.service';

@Component({
  selector: 'app-cajas-edit',
  templateUrl: './cajas-edit.component.html',
  styleUrls: ['./cajas-edit.component.css']
})
export class CajasEditComponent implements OnInit {

  public  datosCaja: Caja={box_cod:0,box_number:'',box_date:'',box_previous_balance:0,box_current_deposit:0,box_initial_balance:0,box_total_spends:0,box_cash_balance:0,box_status:'Archivado',user_cod:1};
   
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
  constructor(
    public dialogRef: MatDialogRef<CajasEditComponent>, 
    private router:Router, @Inject(MAT_DIALOG_DATA) public data: any, 
    private toastr:ToastrService,private cajaService:CajaService


  ) { }

  ngOnInit(): void {
    this.construirFormulario();
    this.cargarEstado();
    console.log(this.data)
    this.cajaService.viewBox(this.data.box_cod).subscribe(
      (response: any ) =>{
        console.log(response.caja);
        this.formEditCaja.setValue(response.caja);
        return this.datosCaja =  response.caja;
      },(error)=>{
        console.log('error',error)
      }

    )

  }
  public cargarEstado(){
    var estado = ['Archivado','En proceso','Culminado'];
    var selector = document.getElementsByName('estadosCaja')[0];
    for(let estados in estado){
      var opcion = document.createElement('option');
      opcion.text = estado[estados];
      selector.append(opcion);
    }
  }
  Editar(formulario:Caja){
        this.data= this.datosCaja;
        this.cajaService.editBox(formulario)
        .subscribe(
          data =>{
            
            this.dialogRef.close(data.resultado);
          }

        )
        

    }
  

}
