export class LoginRequest{
    Number:string;
    Password:string;
    constructor(){
        this.Number = "";
        this.Password = "";
    }
}
export class SignupRequest extends LoginRequest{
    Name:string;
    constructor(){
        super();
        this.Name = "";
    }
}