import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './Components/product/product.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductsComponent } from './Components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    MaterialModule
  ]
})
export class ProductModule { }
