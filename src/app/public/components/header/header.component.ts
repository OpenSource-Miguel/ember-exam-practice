import {Component, signal} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {MatAnchor} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";

export interface HeaderOption {
  icon: string;
  path: string;
  title: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    NgForOf,
    MatAnchor,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Ember';

  options = signal<HeaderOption[]>([
    { icon: 'home', path: 'home', title: 'Home'},
    { icon: 'info', path: 'store/bundles', title: 'Bundles'}
  ]);

  trackByTitle(option: any): string {
    return option.title;
  }
}
