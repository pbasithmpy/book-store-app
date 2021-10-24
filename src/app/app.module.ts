import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home/home.component';
import { ListBooksComponent } from './books/components/list-books/list-books.component';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ResetPwComponent } from './auth/components/reset-pw/reset-pw.component';
import { CartComponent } from './shopping/components/cart/cart.component';
import { CheckoutComponent } from './shopping/components/checkout/checkout.component';
import { ConfirmationComponent } from './shopping/components/confirmation/confirmation.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { BookCardComponent } from './books/components/book-card/book-card.component';
import { WishlistComponent } from './shopping/components/wishlist/wishlist.component';
import { CartItemComponent } from './shopping/components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListBooksComponent,
    BookDetailsComponent,
    LoginComponent,
    SignupComponent,
    ResetPwComponent,
    CartComponent,
    CheckoutComponent,
    ConfirmationComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BookCardComponent,
    WishlistComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }