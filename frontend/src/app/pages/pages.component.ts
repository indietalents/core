import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      pages!
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  constructor(private router: Router) {

    router.navigate(['/profile']);

  }

  menu = MENU_ITEMS;
}
