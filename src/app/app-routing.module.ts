import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';

const routes: Routes = [
{path : '', redirectTo: 'home', pathMatch: 'full'},
{path : 'home', component: HomeComponent},
{path : 'categories', component: CategoriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routingComponents = [HomeComponent,CategoriesComponent];
