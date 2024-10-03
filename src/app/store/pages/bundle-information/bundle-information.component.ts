import { Component, OnInit } from '@angular/core';
import { Bundle } from "../../model/bundle.entity";
import { BundlesService } from "../../services/bundles.service";
import { BundleItemComponent } from "../../components/bundle-item/bundle-item.component";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-bundle-information',
  standalone: true,
  imports: [
    BundleItemComponent,
    NgForOf
  ],
  templateUrl: './bundle-information.component.html',
  styleUrl: './bundle-information.component.css'
})
export class BundleInformationComponent implements OnInit {
  bundles: Bundle[] = [];

  constructor(private bundlesService: BundlesService) {}

  ngOnInit(): void {
    // Suscribirse al servicio para obtener los datos
    this.bundlesService.getAll().subscribe({
      next: (data) => {
        console.log(data);  // Aquí imprimirá correctamente el array de bundles
        this.bundles = data;  // Asigna los bundles a tu propiedad del componente
      },
      error: (error) => {
        console.error("Error fetching bundles", error);
      }
    });
  }
}
