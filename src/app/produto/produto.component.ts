import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto.model';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {


  produto: Produto;

  constructor() { }

  ngOnInit(): void {

    this.produto = {
      name: "Baguete",
      price: 15.5,
      description: "E um baguete pô!!! Gluten Free"
    }

  }

}
