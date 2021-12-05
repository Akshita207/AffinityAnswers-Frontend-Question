import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  allItems = []
  categoryObserver = new BehaviorSubject<String>("category-1");
  cartItemsObserver : BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  constructor() {
   }

  setCategory(category: any) {
    this.categoryObserver.next(category);
  }

  setCartItems(item) {
    const curItem = []
    item.cart_quantity += 1
    if (item.cart_quantity == 1){
      curItem.push(...[item])
      this.allItems.push(curItem)
      this.cartItemsObserver.next(this.allItems)
    }
  }

  removeCartItems(index) {
    this.allItems[index][0].cart_quantity = 0
    this.allItems.splice(index, 1)
    this.cartItemsObserver.next(this.allItems)
  }

  decreaseQuantity(index) {
    this.allItems[index][0].cart_quantity -= 1
    if (this.allItems[index][0].cart_quantity == 0) {
      this.allItems.splice(index, 1)
      this.cartItemsObserver.next(this.allItems)
    }
  }

  increaseQuantity(index) {
    this.allItems[index][0].cart_quantity += 1
  }
}
