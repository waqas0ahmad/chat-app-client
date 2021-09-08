import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }
  public getRequest(url:string){
    return this.http.get(this.apiUrl+url);
  }
  public postRequest<T>(url:string,data:any){
    return this.http.post<T>(this.apiUrl+url,data);
  }
}
