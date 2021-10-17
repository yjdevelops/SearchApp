import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpcacheService {

  private requests: any = { };  
  
  constructor() { }  
  
  put(url: string, response: HttpResponse<any>): void {  
    this.requests[url] = response;  
  }  
  
  get(url: string): HttpResponse<any>  {  
    return this.requests[url];  
  }  
  
  invalidateCache(): void {  
    this.requests = { };  
  }  
}
