import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  allTenants = 'http://localhost:8080/allTenants';
  allCategories = 'http://localhost:8080/allCategories';
  constructor(private http: HttpClient) { }

  getAllTenants() {
    return this.http.get(this.allTenants);
  }

  getAllCategories() {
    return this.http.get(this.allCategories);
  }
}
