import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor( private http: HttpClient) { }
 //fetching api..... 
  getdata(): Observable<any> {
    const url = "https://api.covid19india.org/v3/min/data.min.json"
    return this.http.get<any>(url)
  }
}
