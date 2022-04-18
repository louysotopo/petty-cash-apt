export class User{
    user_id?:string;
    user_email:string;
    user_name:string;
    user_category:string;
    constructor(id:string,email:string, name:string,category:string){
        this.user_id = id;
        this.user_email = email;
        this.user_name = name;
        this.user_category = category;
    }

}