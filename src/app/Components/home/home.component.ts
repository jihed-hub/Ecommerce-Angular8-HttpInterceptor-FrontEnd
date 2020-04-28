import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(
      res=>{
        this.products=res.productList;
      });
  }
  addToCart(e){
    this.api.addCartItems(e).subscribe(
      res=>{
        console.log(res);
        alert("added succefully");
      });
  }
}
