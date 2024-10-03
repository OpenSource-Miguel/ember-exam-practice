import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";

import { Bundle } from "../model/bundle.entity";
import { Product } from "../model/product.entity";

@Injectable({
  providedIn: 'root'
})

export class BundlesService extends BaseService<Bundle> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/bundles';
  }

  getProductsByBundleId(bundleId: number): Observable<Product[]> {
    const url = `${this.basePath}${this.resourceEndpoint}/${bundleId}/products`;
    return this.http.get<Product[]>(url, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
