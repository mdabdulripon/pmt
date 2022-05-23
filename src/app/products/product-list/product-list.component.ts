import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
	pageTitle = 'Products';
	errorMessage: string;
	displayCode: boolean;
	products: Product[];

	selectedProduct: Product | null;
	sub: Subscription;

	constructor(private store: Store<any>, private productService: ProductService) { }

	ngOnInit(): void {
		this.sub = this.productService.selectedProductChanges$.subscribe(
			(currentProduct) => this.selectedProduct = currentProduct
		);

		this.productService.getProducts().subscribe({
			next: (products: Product[]) => this.products = products,
			error: err => this.errorMessage = err
		});

		this.store.select('products').subscribe(product => {
			if(product) {
				this.displayCode = product.showProductCode;
			}
		})
	}

	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}

	checkChanged(): void {
		this.store.dispatch(
			{type: '[Product] Toggle Product Code'}
		)
	}

	newProduct(): void {
		this.productService.changeSelectedProduct(this.productService.newProduct());
	}

	productSelected(product: Product): void {
		this.productService.changeSelectedProduct(product);
	}

}
