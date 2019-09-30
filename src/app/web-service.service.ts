import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  fetchurl :string = "http://localhost:8080/selectQuery"
  constructor(private http:HttpClient) { }

  getTenantsInfo(){
    return this.http.get(this.fetchurl);
  }
}
