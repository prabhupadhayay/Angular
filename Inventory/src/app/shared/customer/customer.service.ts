import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { map } from "rxjs/operators";
// import { catchError,retry} from "rxjs/operators";
// import { throwError } from "rxjs";

import { Customer } from "./customer";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  selectedCustomer: Customer;
  customers: Customer[];
  readonly baseurl = "http://localhost:3000/api/customer";
  constructor(private http: HttpClient) {}

  postCustomer(rog: Customer) {
    return this.http.post(this.baseurl, rog);
    // .pipe(retry(2),catchError(this.handleError));
  }
  getCustomerList() {
    return this.http.get(this.baseurl);
    // .pipe(retry(2),catchError(this.handleError));
  }

  putCustomer(rog: Customer) {
    return this.http.put(this.baseurl + `/${rog._id}`, rog);
    // .pipe(retry(2),catchError(this.handleError));
  }

  deleteCustomer(_id: string) {
    return this.http.delete(this.baseurl + `/${_id}`);
    // .pipe(retry(2),catchError(this.handleError));
  }
  // handleError(error: HttpErrorResponse) {
  //   console.log("Error occured");
  //   return throwError(error);
  // }
}
