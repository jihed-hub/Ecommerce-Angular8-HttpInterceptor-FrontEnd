import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './Components/admin/admin.component';
import { EditItemComponent } from './Components/admin/edit-item/edit-item.component';
import { OrderItemComponent } from './Components/admin/order-item/order-item.component';
import { HomeComponent } from './Components/home/home.component';
import { AddressComponent } from './Components/home/address/address.component';
import { CartItemComponent } from './Components/home/cart-item/cart-item.component';
import { ProductComponent } from './Components/home/product/product.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthService } from './Services/auth.service';
import { AuthGuardService } from './Services/auth-guard.service';
import { TokenStorageService } from './Services/token-storage.service';
import { AuthInterceptor } from './Helpers/auth-interceptor';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EditItemComponent,
    OrderItemComponent,
    HomeComponent,
    AddressComponent,
    CartItemComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
