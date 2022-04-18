export class Caja{
    box_cod:number;
    box_number:string;
    box_date:string;    
    box_previous_balance:number;
    box_current_deposit:number;
    box_initial_balance:number;
    box_total_spends:number;
    box_cash_balance:number;
    box_status:string;
    user_cod:number

    constructor(id:number,number:string ,date:string, previous_balance:number,current_deposit:number,initial_balance:number,total_spends:number,cash_balance:number,status:string,user_code:number){
        this.box_cod = id;
        this.box_number = number;
        this.box_date = date;
        this.box_previous_balance = previous_balance;
        this.box_current_deposit =  current_deposit;
        this.box_initial_balance = initial_balance;
        this.box_total_spends = total_spends;
        this.box_cash_balance = cash_balance;
        this.box_status = status;            
        this.user_cod  = user_code;
    }
}