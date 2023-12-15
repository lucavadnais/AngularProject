import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {NgForOf} from "@angular/common";
import { Requets } from '../../utils/requets';
import {Product} from "../../utils/dataClass";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  @Input() item = ''; // decorate the property with @Input()
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private requestService: Requets) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.item = params['item'];
    });
    this.requestService.getProductById(this.item).subscribe((product) => {
      console.log('Users: ', product)
      this.product = product;
    }, (error) => {
      console.log('Error: ', error);
    });

  }
}
