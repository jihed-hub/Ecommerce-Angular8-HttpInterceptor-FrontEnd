import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { Router } from '@angular/router';
import { Address } from 'src/app/Models/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addressForm: any;
  model: Address = {
    address: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
    phonenumber: ''
  };
  
  constructor(private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.api.getAddress().subscribe(
      res=>{
        if(res.map != null){
          this.model = res.map;
        }
      });
  }
  addAddress(){
    this.api.addAddress(this.model).subscribe(
      res=>{
        console.log(res);
        this.route.navigate(["/home"]);
        alert("Address added succeffuly");
      });
  }

}
