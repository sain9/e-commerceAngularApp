import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: '',
   component: HomeComponent,
   children: [
    {path: 'products', component: ProductsComponent},
    {path: 'cart', component: CartComponent}
   ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
