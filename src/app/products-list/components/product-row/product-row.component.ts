import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from './../../../core/models/product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  @Input()
  public product: Product;

  @Output()
  public selectedProduct: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  getDetails(): void {
    this.selectedProduct.emit(this.product);
  }

  ngOnInit(): void {

  }


}
