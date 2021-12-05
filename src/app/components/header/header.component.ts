import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalCartItems = 0;
  cartItems;
  showCart = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.cartItemsObserver.subscribe(res => {
      this.totalCartItems = res.length
      this.cartItems = res
    })
  }

  removeFromCart(index) {
    this.sharedService.removeCartItems(index)
  }

  subtract(index) {
    this.sharedService.decreaseQuantity(index)
  }

  add(index) {
    this.sharedService.increaseQuantity(index)
  }

}
