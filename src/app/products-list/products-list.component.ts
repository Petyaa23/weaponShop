import {Product} from './../core/models/product';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products: Product[] = [];
  public selectedProduct: Product;

  constructor() {
    this.products = [
      new Product(1, 'MP654k', 'Пневматический пистолет', 150, 'https://firing-line.ru/wp-content/uploads/2019/07/d8f55d862ea011e9b5d400155d462403_531ca571a25011e9929600155d465102.jpg'),
      new Product(2, 'ПМР', 'Травматический пистолет ', 400, 'https://firing-line.ru/wp-content/uploads/2019/08/b4d74ff917fb11e988a700155d469a03_8ad3a53e8b8711e986c600155d463900.jpg'),
      new Product(3, 'МР-371', 'Сигнальный пистолет', 125, 'https://firing-line.ru/wp-content/uploads/2019/08/8ef709484d1e11e4b3ca000d88371cfb_98d3a79c8c4911e994da00155d462803.jpg'),
    ];
  }

  ngOnInit(): void {
  }

  getSelectedProduct(product: Product): void {
    this.selectedProduct = product;
  }

  public isSelected(product: Product): boolean {
    if (product && this.selectedProduct && product.id === this.selectedProduct.id) {
      return true;
    }
    return false;
  }

}
