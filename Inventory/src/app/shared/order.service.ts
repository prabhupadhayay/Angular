import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


import { Order } from './order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  selectedOrder :Order;
 orders:Order[];
 readonly baseurl="http://localhost:3000/api/order";
  constructor(private http:HttpClient) { }

  postOrder(rog: Order) {
    return this.http.post(this.baseurl, rog);
  }
  getOrderList(){
    return this.http.get(this.baseurl);
  }

  putOrder(rog:Order){
    return this.http.put(this.baseurl + `/${rog._id}`,rog);
  }

  deleteOrder(_id:string){
    return this.http.delete(this.baseurl + `/${_id}`);
  }
}
