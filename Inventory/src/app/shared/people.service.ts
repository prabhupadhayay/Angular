import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


import { People } from './people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
 selectedPeople :People;
 peoples:People[];
 readonly baseurl="http://localhost:3000/people";
  constructor(private http:HttpClient) { }

  postPeople(rog: People) {
    return this.http.post(this.baseurl, rog);
  }
  getPeopleList(){
    return this.http.get(this.baseurl);
  }

  putPeople(rog:People){
    return this.http.put(this.baseurl + `/${rog._id}`,rog);
  }

  deletePeople(_id:string){
    return this.http.delete(this.baseurl + `/${_id}`);
  }
}
