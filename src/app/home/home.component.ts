import { Component, OnInit } from '@angular/core';
import { WebServiceService} from '../web-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  tenants: any;
  errorMessage = ' ';

  constructor(private http: WebServiceService) { }

  ngOnInit() {
    this.http.getAllTenants().subscribe(
      (data) => {
      this.tenants = data;
      console.log(data);
    },
    (error) => {
      this.errorMessage = error.message;
    }
    );
  }
}
