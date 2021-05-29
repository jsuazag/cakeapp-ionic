import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../api/products/products.service';
import { Product } from '../shared/models/Product';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public products: Array<Product> = [];

  public filterOptions: Array<any> = [
    {
      id: 1,
      icon: 'assets/icons/cake.png',
      label: 'Cakes',
    },
    {
      id: 2,
      icon: 'assets/icons/coffee.png',
      label: 'Coffees',
    },
    {
      id: 3,
      icon: 'assets/icons/cinnamon-roll.png',
      label: 'Desserts',
    },
    {
      id: 0,
      icon: null,
      label: 'All'
    },

  ];

  public filterActived: number = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts (): void {
    this.productsService.getAll().subscribe(productsResponse => {
      this.products = productsResponse;
    });
  }

}
