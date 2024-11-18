import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component, EventEmitter, Input, input, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('stagger', [
      transition(':enter', [
        query('button', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger(100, animate('300ms ease-out', style({ opacity: 1, transform: 'none' }))),
        ]),
      ]),
    ]),
  ],
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter<void>();

}
