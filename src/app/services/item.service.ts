import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ItemService {

  private itemsUrl = '/items'; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getItems (): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(
        catchError(this.handleError<Item[]>('getItems', []))
      );
  }

  addItem (item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, this.httpOptions).pipe(
      catchError(this.handleError<Item>('addItem'))
    );
  }

  updateItem (item: Item): Observable<Item> {
    const id = typeof item === 'string' ? item : item.id;
    const url = `${this.itemsUrl}/${id}`;
    return this.http.put<Item>(url, item, this.httpOptions).pipe(
      catchError(this.handleError<Item>('updateItem'))
    );
  }

  deleteItem (item: Item | string): Observable<Item> {
    const id = typeof item === 'string' ? item : item.id;
    const url = `${this.itemsUrl}/${id}`;

    return this.http.delete<Item>(url, this.httpOptions).pipe(
      catchError(this.handleError<Item>('deleteItem'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
