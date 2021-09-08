export class ApiResponse<T> {
    Status?: number;
    Message?: string;
    Data?: T
}
export class User{
    Id?:number;
    Name?:string;
    Number?:string;
    Profile?:string;
    Token?:string;
}