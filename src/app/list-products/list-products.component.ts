import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  list: Produto[];

  constructor() { }

  ngOnInit(): void {
    this.list = [
      {
        name: 'Pão de frios',
        price: 16.9,
        description: "Pão de frios gostosin"
      },
      {
        name: 'Pão Fracês',
        price: 13.9,
        description: "Pão francês top"
      },
    ]
  }

}
