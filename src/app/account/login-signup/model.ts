export class LoginRequest{
    Phonenumber:string;
    Password:string;
    constructor(){
        this.Phonenumber = "";
        this.Password = "";
    }
}
export class SignupRequest extends LoginRequest{
    Fullname:string;
    constructor(){
        super();
        this.Fullname = "";
    }
}