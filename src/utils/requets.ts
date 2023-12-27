import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Product} from "../utils/dataClass";

@Injectable({
  providedIn: 'root'
})
export class Requets {
  private apiUrl = 'http://localhost:3000/products'; // Change for your real API endpoint if using some API

  constructor(private http: HttpClient) {}

  getFakeUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error: any) => {
        console.error('Error fetching fake users:', error);
        return throwError(error);
      })
    );
  }

  getProductById(productId: string): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<Product>(url);
  }
}
