import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
