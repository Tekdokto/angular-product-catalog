import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ProductService, Product } from '../../services/product.service';
import { ProductEditModalComponent } from '../product-edit-modal/product-edit-modal.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ProductEditModalComponent], // ✅ FIX: Import Modal Component
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  searchControl = new FormControl('');
  selectedCategory = new FormControl('');
  editingProduct: Product | null = null;
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
      this.categories = ['All Categories', ...new Set(data.map(product => product.category))];
    });

    this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe(() => this.applyFilters());
    this.selectedCategory.valueChanges.pipe(debounceTime(300)).subscribe(() => this.applyFilters());
  }

  applyFilters(): void {
    const searchText = this.searchControl.value?.toLowerCase() || '';
    const category = this.selectedCategory.value !== 'All Categories' ? this.selectedCategory.value : '';

    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(searchText) &&
      (category ? product.category === category : true)
    );
  }

  editProduct(product: Product): void {
    this.editingProduct = { ...product };
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      this.applyFilters();
    }
    this.editingProduct = null;
  }
}
