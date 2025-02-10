import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-product-edit-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-edit-modal.component.html',
  styleUrls: ['./product-edit-modal.component.scss']
})
export class ProductEditModalComponent {
  @Input() editingProduct: Product | null = null;
  @Input() categories: string[] = [];
  @Output() save = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();

  saveProduct(): void {
    if (this.editingProduct) {
      this.save.emit(this.editingProduct);
    }
  }

  cancelEdit(): void {
    this.cancel.emit();
  }
}
