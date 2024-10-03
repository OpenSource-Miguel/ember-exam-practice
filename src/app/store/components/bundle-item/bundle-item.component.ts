import {Component, Input, OnInit} from '@angular/core';
import { Bundle } from "../../model/bundle.entity";
import { Product } from "../../model/product.entity";
import { BundlesService } from "../../services/bundles.service";
import {MatCard, MatCardContent, MatCardImage, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-bundle-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent
  ],
  templateUrl: './bundle-item.component.html',
  styleUrl: './bundle-item.component.css'
})
export class BundleItemComponent implements OnInit {
  @Input() bundle!: Bundle;
  products: Product[] = [];

  constructor(private bundleService: BundlesService) {}

  ngOnInit(): void {
    this.bundleService.getProductsByBundleId(this.bundle.id).subscribe(products => {
      this.products = products;
      console.log(this.products);
    });
  }

  calculateYouSave(bundle: Bundle): number {
    const totalProductPrice = this.products.reduce((sum, product) => sum + product.price, 0);
    return totalProductPrice - bundle.price;
  }
}
