import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserProduct } from './userdata/userproduct.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/productdetails";

  getData(): Observable<UserProduct[]> {
    return this.http.get<UserProduct[]>(this.url).pipe(map((res: any)=> {
      return res;
    }))
  }

  postData(data: any) {
    return this.http.post(this.url, data);
  }

  delData(id: number){
    return this.http.delete(this.url + `/${id}`);
  }

  updateProducts(data: any, id: number) {
    return this.http.put<any>(this.url + `/${id}`, data);
  }

}
