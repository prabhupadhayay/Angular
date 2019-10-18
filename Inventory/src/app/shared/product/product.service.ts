import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct :Product;
 products:Product[];
 readonly baseurl="http://localhost:3000/api/product";
  constructor(private http:HttpClient) { }

  postProduct(rog: Product) {
    return this.http.post(this.baseurl, rog);
  }
  getProductList(){
    return this.http.get(this.baseurl);
  }
  getProductbyId(id){
    return this.http.get(this.baseurl + `/${id._id}`,id);
  }
  putProduct(rog:Product){
    return this.http.put(this.baseurl + `/${rog._id}`,rog);
  }

  deleteProduct(_id:string){
    return this.http.delete(this.baseurl + `/${_id}`);
  }
}
