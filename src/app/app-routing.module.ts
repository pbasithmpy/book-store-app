import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCouponComponent } from './admin/components/manage-coupons/components/add-coupon/add-coupon.component';
import { CouponsComponent } from './admin/components/manage-coupons/components/coupons/coupons.component';
import { OrdersComponent } from './admin/components/manage-orders/components/orders/orders.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ResetPwComponent } from './auth/components/reset-pw/reset-pw.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';
import { ListBooksComponent } from './books/components/list-books/list-books.component';
import { HomeComponent } from './home/components/home/home.component';
import { CartComponent } from './shopping/components/cart/cart.component';
import { CheckoutComponent } from './shopping/components/checkout/checkout.component';
import { ConfirmationComponent } from './shopping/components/confirmation/confirmation.component';
import { WishlistComponent } from './shopping/components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'books', component:ListBooksComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'confirm',component:ConfirmationComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'reset-password',component:ResetPwComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'books/:id', component:BookDetailsComponent},
  {path: 'admin/coupons', component:CouponsComponent},
  {path: 'admin/coupons/add', component:AddCouponComponent},
  {path: 'admin/orders',component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
