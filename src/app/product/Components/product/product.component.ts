import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges, OnInit, DoCheck, OnDestroy} from '@angular/core';

import { Product } from 'src/app/core/models/product.model';

import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector:'app-product',
  templateUrl:'../product/product.component.html',
  styleUrls: ['../product/product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor (
    private cartService: CartService,
  ) {
    console.log('1. constructor')
  }

/*   ngOnChanges (changes: SimpleChanges) {
    console.log('2. ngOnChanges')
    console.log(changes)
  } */

  ngOnInit () {
    console.log('3. ngOnInit')
  }

  ngDoCheck () {
    console.log('4.ngDoCheck')
  }

  ngOnDestroy () {
    console.log('5. ngOnDestroy')
  }

  addCart() {
    console.log('Agregar al carrito');
    this.cartService.addCart(this.product);
    /* this.productClicked.emit(this.product.id); */
  }
}