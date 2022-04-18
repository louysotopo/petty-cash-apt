export class Payment{
    spend_cod:number;
    spend_date:string;
    spend_description:string;
    spend_kilometers: number;
    spend_gallons: number;
    spend_payout:string;
    spend_reason: string;
    spend_pay: number;
    box_cod: number
    

    
    constructor(cod:number, date:string, description:string , kilometers:number,gallons:number,payout:string,reason:string,pay:number,box:number ){
        this.spend_cod = cod;
        this.spend_date = date;
        this.spend_description = description;
        this.spend_kilometers = kilometers;
        this.spend_gallons = gallons;
        this.spend_payout = payout;
        this.spend_reason = reason;
        this.spend_pay = pay;        
        this.box_cod = box;
    }
}