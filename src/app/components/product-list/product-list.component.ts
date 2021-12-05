import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import products from './data/products-list.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  category: any;
  productList = products

  taskFields : string[] = Object.keys(this.productList);
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.categoryObserver.subscribe(res => this.category = res)
  }

  addToCart(item) {
    this.sharedService.setCartItems(item)
  }

}
