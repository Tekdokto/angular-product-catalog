import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private mockDataUrl = '/assets/mock-products.json';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.mockDataUrl);
  }
}
