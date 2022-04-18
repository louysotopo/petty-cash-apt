import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators , FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Payment } from 'src/app/model/Payment';
import { SpendService } from 'src/app/services/spends.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payments-create',
  templateUrl: './payments-create.component.html',
  styleUrls: ['./payments-create.component.css']
})
export class PaymentsCreateComponent implements OnInit {
  formpago:FormGroup=this.fb.group({
    fecha:new FormControl('',[Validators.required]),
    descripcion:new FormControl('',[Validators.required]),
    kilometros :new FormControl('',[]),
    galones:new FormControl('',[]),
    factura: new FormControl('',[Validators.required]),
    razones: new FormControl('',[Validators.required]),
    pago:new FormControl('',[Validators.required])
  });
  public zero:Number = 0;
  constructor(
    private fb:FormBuilder, public dialogRef: MatDialogRef<PaymentsCreateComponent>,
  @Inject(MAT_DIALOG_DATA) public data: String,private spendService:SpendService, private toastr:ToastrService

  ) { }

  ngOnInit(): void {
    this.formpago.get('kilometros')?.setValue(0)
    this.formpago.get('galones')?.setValue(0)
  }
  public Guardar(){
    let data = this.formpago.value;
    let pago___ = new Payment(0,data.fecha ,data.descripcion,data.kilometros,data.galones,data.factura,data.razones,data.pago,Number(this.data));
    console.log(pago___);
    this.spendService.createSpend(pago___)
    .subscribe( data => {
        this.dialogRef.close(data.resultado);
       
    }, error =>{
        this.toastr.success("Se ha producido un error","Error de Conección");
    })

  }
}
