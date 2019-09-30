import { Component, OnInit  } from '@angular/core';
import {WebServiceService} from './web-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Shopping Directory App';
  tenants:Object;
  errorMessage : String = "";
 
  constructor(private _http: WebServiceService) { }

  ngOnInit() {
    this._http.getTenantsInfo().subscribe(
      (data) =>{
      this.tenants = data;
      console.log(data);
    },
    (error) => {
      this.errorMessage = error.message; 
    } 
    );
  }
}
