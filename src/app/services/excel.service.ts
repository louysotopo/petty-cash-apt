import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

import { Caja } from '../model/Caja';
import { Payment } from '../model/Payment';


@Injectable({
    providedIn: 'root'
  })
  export class ExcelService {
    constructor(){}

    public exportAsExcelFile(
        caja:Caja,
        payments:Payment[]
    ){

        var workbook = XLSX.utils.book_new();
        var ws_name = "CAJA "+caja.box_number ;

        /* Create worksheet */                                                                 
        var ws_data = [
        [ "Fecha de Deposito", caja.box_date ],
        [ "Saldo Anterior",  caja.box_previous_balance ],
        [ "Deposito", caja.box_current_deposit ],
        [ ],
        ["Item","Fecha","Descripcion","Kilometraje (F. combustible)","Galones compra","FACTURA U OTROS","Motivo del gasto","Ingreso","Saldo"]
        ];
        //var worksheet = XLSX.utils.json_to_sheet(payments, );
        var headers_:any[]
        
        var ws = XLSX.utils.aoa_to_sheet(ws_data);

        for (let i = 0; i < payments.length ; i++) {
          XLSX.utils.sheet_add_aoa(ws, [
            [ i+1,
              payments[i].spend_date,
              payments[i].spend_description,
              payments[i].spend_kilometers,
              payments[i].spend_gallons,
              payments[i].spend_payout,
              payments[i].spend_reason,
              payments[i].spend_pay            
            ],
           ],
           { origin: -1});  

        }

        //XLSX.utils.sheet_add_json(ws, payments, {skipHeader: true , origin: -1})
        
        XLSX.utils.sheet_add_aoa(ws, [ 
           [], 
           [],
           [],
           [], 
           [],
           [],
           [], 
           [],
           [],
           [], 
           [],
           ["","","","","","","Total Gastos",caja.box_total_spends],
           ["","","","","","","Saldo de Caja","",caja.box_cash_balance]
        ],{origin:-1})

        


        /* Add the worksheet to the workbook */
        XLSX.utils.book_append_sheet(workbook, ws, ws_name);
        return XLSX.writeFile(workbook, "out.xlsx"); 

    }




  }