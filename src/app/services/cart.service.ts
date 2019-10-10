import { Cart } from './../models/cart';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartUrl = '/carts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  addItem (userId: string, item: Item): Observable<Item> {
    const url = `${this.cartUrl}/user/${userId}`;
    return this.http.put<Item>(url, item, this.httpOptions).pipe(
      catchError(this.handleError<Item>('addItem'))
    );
  }

  removeItem (userId: string, item: Item): Observable<Item> {
    const url = `${this.cartUrl}/${userId}`;
    return this.http.put<Item>(url, item, this.httpOptions).pipe(
      catchError(this.handleError<Item>('removeItem'))
    );
  }

  getCartByUserId (userId: string): Observable<Cart> {
    const url = `${this.cartUrl}/user/${userId}`;
    return this.http.get<Cart>(url, this.httpOptions).pipe(
        catchError(this.handleError<Cart>('getCartByUserId', null))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  

}
