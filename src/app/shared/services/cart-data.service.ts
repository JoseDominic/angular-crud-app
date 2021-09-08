import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  //Any to any component comm.
  //Step 1: create common data holder
  private defaultCartItems:any[] = [
    {
      id:2,
      name:'Cheese',
      price:'$6.38'
    }
  ]

  //to make above data subscribable we need to create an rxjs observable
  //Step 2: Create behaviour subject with default cart items
  cartItemsList = new BehaviorSubject(this.defaultCartItems);

  //Step 3: Make behaviour subject as Observable so that any other component can subscribe to it
  latestCartItemsList: Observable<any> = this.cartItemsList.asObservable();

  constructor() { }

  updateCart(pdt:any) {
    console.log(pdt);

    this.latestCartItemsList.pipe( take(1) ).subscribe( (cartItems) => {
      console.log(cartItems);
      const newCartItemsArr = [ ...cartItems , pdt];
      this.cartItemsList.next(newCartItemsArr);
    } )
  }
}
