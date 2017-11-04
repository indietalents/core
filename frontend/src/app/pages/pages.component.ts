import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  constructor() {
    console.log('PagesComponent loaded!');
   }

  ngOnInit() {
    console.log('PagesComponent inited!');
  }

  menu = MENU_ITEMS;
}
