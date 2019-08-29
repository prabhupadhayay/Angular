import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  selectedCustomer :Customer;
 customers:Customer[];
 readonly baseurl="http://localhost:3000/api/customer";
  constructor(private http:HttpClient) { }

  postCustomer(rog: Customer) {
    return this.http.post(this.baseurl, rog);
  }
  getCustomerList(){
    return this.http.get(this.baseurl);
  }

  putCustomer(rog:Customer){
    return this.http.put(this.baseurl + `/${rog._id}`,rog);
  }

  deleteCustomer(_id:string){
    return this.http.delete(this.baseurl + `/${_id}`);
  }
}
