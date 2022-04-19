import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Caja } from 'src/app/model/Caja';
import { Payment } from 'src/app/model/Payment';
import { SpendService } from 'src/app/services/spends.service';

@Component({
  selector: 'app-payments-delete',
  templateUrl: './payments-delete.component.html',
  styleUrls: ['./payments-delete.component.css']
})
export class PaymentsDeleteComponent implements OnInit {

  constructor(
    private modalService: NgbModal, public dialogRef: MatDialogRef<PaymentsDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Payment, private toastr:ToastrService,public spendService:SpendService
  ) { }

  ngOnInit(): void {
    console.log(this.data);// se puede agregar "," y otros parametros
    this.dialogRef.updatePosition({top:"50px"});
    

  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    }, (reason) => {
      
    });
}
public btneliminarpago(){
  this.spendService.deleteSpend(this.data)
  .subscribe(
    (response)=>{
      this.dialogRef.close(response.resultado);
    },error=>{
      this.toastr.error('Error al eliminar un pago de la caja ','Problema del sistema');
      
    }


  )
  

}

}
