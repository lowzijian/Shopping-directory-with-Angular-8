import { Component, OnInit } from '@angular/core';
import { WebServiceService} from '../web-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: any = [];
  errorMessage = ' ';

  constructor(private http: WebServiceService) { }

  ngOnInit() {
    this.http.getAllCategories().subscribe(
      (data) => {
      this.categories = data;
      this.setCategoryIcon(this.categories);
      console.log(this.categories);
    },
    (error) => {
      this.errorMessage = error.message;
    }
    );

  }

  // set Category Icon
    setCategoryIcon(categories) {
      for (let i = 0; i < this.categories.length; i++) {
      {
        let categoryIcon = '';
        categoryIcon = this.categoryIconNaming(this.categories[i].name);
        this.categories[i].iconName = categoryIcon;
      }

    }
  }


  categoryIconNaming(categoryName ) {
    let categoryIconName = '';

    switch (categoryName) {

      case 'Food & Beverages': {
        categoryIconName = 'fas fa-utensils';
        break;
      }

      case 'Fashion': {
        categoryIconName = 'fas fa-tshirt';
        break;
      }

      case 'Entertainment': {
        categoryIconName = 'fas fa-film';
        break;
      }

      case 'Beauty & Wellness': {
        categoryIconName = 'fas fa-spa';
        break;
      }

      case 'Supermarket': {
        categoryIconName = 'fas fa-shopping-cart';
        break;
      }

      case 'Home': {
        categoryIconName = 'fas fa-home';
        break;
      }

      case 'Book & Stationaries': {
        categoryIconName = 'fas fa-book';
        break;
      }

      case 'Jewellry & Timepieces': {
        categoryIconName = 'fas fa-gem';
        break;
      }

      case 'Communication & IT': {
        categoryIconName = 'fas fa-laptop';
        break;
      }

      case 'Optical & Eyeware': {
        categoryIconName = 'fas fa-eye';
        break;
      }

      case 'Toy & Games': {
        categoryIconName = 'fas fa-gamepad';
        break;
      }

  }
    return categoryIconName;
}

}
