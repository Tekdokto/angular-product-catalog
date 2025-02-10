import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <header>
      <h1>Product Catalog</h1>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    header {
      background-color: #007bff;
      color: white;
      padding: 15px;
      text-align: center;
    }
    main {
      padding: 20px;
    }
  `]
})
export class AppComponent {}
