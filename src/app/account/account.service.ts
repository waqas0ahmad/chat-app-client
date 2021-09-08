import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { ApiService } from '../service/api.service';
import { Observable } from 'rxjs';
import { ApiResponse, User } from '../common.models';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  urlPrefix = "chat/";
  constructor(private api:ApiService) { }
  signup(data:any):Observable<ApiResponse<User>>{
    return this.api.postRequest<ApiResponse<User>>(this.urlPrefix+"create-account",data);
  }
  login(data:any):Observable<ApiResponse<User>>{
    return this.api.postRequest<ApiResponse<User>>(this.urlPrefix+"login",data);
  }
}
