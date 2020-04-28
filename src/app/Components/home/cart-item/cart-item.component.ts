import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Models/cart';
import { ApiService } from 'src/app/Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  cartlist: Cart[];
  totalSum: number = 0;
  
  constructor(private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.api.getCartItems().subscribe(res => {
      this.cartlist = res.carts;
      this.cartlist.forEach(value => {
        this.totalSum = this.totalSum + (value.quantity * value.price);
      });
    });
  }

  update(id, quantity) {
    this.api.updateCart(id.value, quantity.value).subscribe(res => {
      this.cartlist = res.carts;
      this.cartlist.forEach(value => {
        this.totalSum = this.totalSum + (value.quantity * value.price);
        alert("Cart Updated Succefully.");
      });
    });
  }
  delete(id) {
    this.api.delCart(id.value).subscribe(res => {
      this.cartlist = res.carts;
      this.cartlist.forEach(value => {
        this.totalSum = this.totalSum + (value.quantity * value.price);
      });
      this.route.navigate(['/home']);
      alert("Your cart have been deleted");
    });
  }
  place() {
    this.api.place().subscribe(res => {
      console.log(res);
    });
    this.route.navigate(['/home']);
    alert("Your order have been placed");
  }

}
