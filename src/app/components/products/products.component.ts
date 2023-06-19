import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: any;
  public filterCategory: any;
  searchKey: string = "";

  constructor(private api: ApiService, private cartService: CartserviceService){ }
  
  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;

      this.productList.forEach((a: any)=> {
        //renaming the category from men's/women's clothing to fashion
        if(a.category === "men's clothing" || a.category === "women's clothing" ){
          a.category = "fashion"
        }
        // assiging new fields to the api quantity and total 
        Object.assign(a, {quantity: 1, total: a.price});  
      });
      console.log(this.productList);
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
    
  }

  addtoCart = (item: any) => {
    this.cartService.addToCart(item);
  }

  //clicking and navigating to a particular category such as fashion,jewellery etc
  filterForCategories = ( category: string) => {
    this.filterCategory = this.productList.filter((a: any) => {
      if(a.category == category || category == ''){
        return a;
      }
    });
  }
  

}
