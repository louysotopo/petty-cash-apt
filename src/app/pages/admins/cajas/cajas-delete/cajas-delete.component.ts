import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Caja } from 'src/app/model/Caja';
import { CajaService } from 'src/app/services/caja.service';


@Component({
  selector: 'app-cajas-delete',
  templateUrl: './cajas-delete.component.html',
  styleUrls: ['./cajas-delete.component.css']
})
export class CajasDeleteComponent implements OnInit {

  constructor(
    private modalService: NgbModal, public dialogRef: MatDialogRef<CajasDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Caja, private toastr:ToastrService , private cajaService:CajaService


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
public btneliminarcaja(){
    this.cajaService.deleteBox(this.data.box_cod)
    .subscribe( 
      data  =>{
               
        this.dialogRef.close(data.resultado);
      },error =>{
        
        this.toastr.error('Problemas de coneccion en la aplicacion');
        this.dialogRef.close();
      }
      ) 

  
}
}
