Overview
This is a Product Catalog Application built using Angular 19+ Standalone API. It allows users to view, filter, and edit products fetched from a mock API.

Features
 Product List with Filtering (Search, Category, Price Range)
 Lazy Loading for Optimized Performance
 Reactive Forms for Live Filtering
 Edit Product in a Modal
 Mock API Data using mock-products.json

 Setup Instructions
1️ Prerequisites
Make sure you have the following installed:

Node.js (>=18.x)
Angular CLI (>=19.x)
Install it globally if not installed:

npm install -g @angular/cli
2️ Clone the Repository

git clone https://github.com/Tekdokto/angular-product-catalog.git
cd angular-product-catalog
3️ Install Dependencies

npm install
4️ Run the Application

ng serve
The app will be available at:
http://localhost:4200/

Folder Structure
angular-product-catalog/
src/
app/
components/
product-list/
product-list.component.ts
product-list.component.html
product-list.component.scss
product-edit-modal/
product-edit-modal.component.ts
product-edit-modal.component.html
product-edit-modal.component.scss
services/
product.service.ts
app.config.ts
app.routes.ts
assets/
mock-products.json
main.ts
angular.json
package.json
README.md

Assumptions
The application does not require a backend and fetches product data from a mock JSON file (mock-products.json).
The user can filter products dynamically using search, category, and price.
The Edit Product feature modifies data locally but does not persist changes (since there's no real database).

Areas for Improvement
Persist Data with a Backend API (e.g., Firebase, Node.js, Express)
Improve UI with Material Design or TailwindCSS
Add Authentication for product editing
Add Pagination for better performance with large datasets

Best Practices Followed
 KISS (Keep It Simple, Stupid) → Simple, modular, and maintainable code
 Lazy Loading → Only loads components when needed
 Reactive Forms → Optimized filtering and form management
 Reusable Components → product-list & product-edit-modal for scalability
 Best Angular 19+ Practices → Standalone API, proper dependency injection