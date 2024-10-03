import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  basePath: string = `${environment.serverBasePath}`;
  resourceEndpoint: string = '/resources';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }

  constructor(protected http: HttpClient) {  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Something happened with request, please try again later';
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${error.error.message}`);
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    return throwError(() => new Error(errorMessage));
  }


  // Get All Resources
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  private resourcePath(): string {
    return `${this.basePath}${this.resourceEndpoint}`;
  }
}
