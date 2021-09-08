import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

const productPaths: Routes = [
  {path:'',component: ProductListingComponent},
  {path:'cart', component:CartComponent},
  {path:':id', component:ProductDetailsComponent},
  {path:'**', component:PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(productPaths) //Registering child routes
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
