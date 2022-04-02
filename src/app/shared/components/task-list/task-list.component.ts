import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {

  public products: any = [];

  constructor(
    public productService: ProductServiceService,
  ) { }

  ngOnInit() {

    this.productService.listarProdutos()
      .then((products) => {if (products && products[0]) {
        this.products = products[0];
        console.log(this.products);
        }
      })
      .catch((err) => alert(err));

  }

}
