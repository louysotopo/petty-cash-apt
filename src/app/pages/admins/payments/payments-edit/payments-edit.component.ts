import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Caja } from 'src/app/model/Caja';
import { Payment } from 'src/app/model/Payment';
import { SpendService } from 'src/app/services/spends.service';

@Component({
  selector: 'app-payments-edit',
  templateUrl: './payments-edit.component.html',
  styleUrls: ['./payments-edit.component.css']
})
export class PaymentsEditComponent implements OnInit {
  public  datosPago: Payment={spend_cod:0,spend_date:'',spend_description:"",spend_kilometers:0,spend_gallons:0,spend_payout:"",spend_reason:"",spend_pay:0,box_cod:0};
   
  public formEditPago!:FormGroup;
  construirFormulario(){
    this.formEditPago= new FormGroup({
      spend_cod : new FormControl(''),
      spend_description:new FormControl(''),
      spend_kilometers:new FormControl(''),
      spend_gallons : new FormControl(''),
      spend_payout : new FormControl(''),
      spend_reason: new FormControl(''),
      spend_pay: new FormControl(''),
      spend_date: new FormControl(''),
      box_cod: new FormControl('')          
     
    })
  }
  constructor(
    public dialogRef: MatDialogRef<PaymentsEditComponent>, 
    private router:Router, @Inject(MAT_DIALOG_DATA) public data: any, 
    private toastr:ToastrService,
    private spendService:SpendService
  ) { }

  ngOnInit(): void {
    this.construirFormulario();
    this.spendService.viewSpend(this.data.spend_cod).subscribe(
      (response: any)=>{
        this.formEditPago.setValue(response.gasto);
        return this.datosPago = response.gasto;
      },error=>{
        console.log('error',error)
      }
    )
  }
  Editar(formulario:Payment){
    this.data= this.datosPago ;
    this.spendService.editSpend(formulario)
    .subscribe(
      response =>{
        this.dialogRef.close(response.respuesta);
      }

    )


}

}
