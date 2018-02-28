import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Router } from '@angular/router';


/**
 * Route tabset components.
 * Renders tabs inside of a router-outlet.
 *
 * @example basic usage example
 *
 * ```
 *  tabs = [
 *  {
 *    title: 'Route tab #1',
 *    route: '/pages/description',
 *  },
 *  {
 *    title: 'Route tab #2',
 *    route: '/pages/images',
 *    }
 *  ];
 *
 *  <route-tabset [tabs]="tabs"></route-tabset>
 * ```
 *
 * @styles
 *
 * route-tabs-font-family:
 * route-tabs-font-size:
 * route-tabs-active-bg:
 * route-tabs-active-font-weight:
 * route-tabs-padding:
 * route-tabs-header-bg:
 * route-tabs-separator:
 * route-tabs-fg:
 * route-tabs-fg-heading:
 * route-tabs-bg:
 * route-tabs-selected:
 */
@Component({
  selector: 'route-tabset',
  styleUrls: ['./route-tabset.component.scss'],
  template: `
    <div class="ui pointing secondary menu">
      <a class="item" href *ngFor="let tab of tabs"
          (click)="$event.preventDefault(); selectTab(tab)"
          routerLink="{{tab.route}}"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }">
        {{tab.title}}
      </a>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class RouteTabsetComponent {

  @HostBinding('class.full-width') fullWidthValue: boolean = false;

  /**
   * Tabs configuration
   * @param Object{route: string, title: string, tag?: string}
   */
  @Input() tabs: any[];

  /**
   * Take full width of a parent
   * @param {boolean} val
   */
  @Input()
  set fullWidth(val: boolean) {
    this.fullWidthValue = convertToBoolProperty(val);
  }

  /**
   * Emits when tab is selected
   * @type {EventEmitter<any>}
   */
  @Output() changeTab = new EventEmitter<any>();

  constructor(private router: Router) {
  }

  selectTab(tab: any) {
    this.changeTab.emit(tab);

    this.router.navigate([tab.route]);
  }
}

export function convertToBoolProperty(val: any): boolean {
  if (typeof val === 'string') {
    val = val.toLowerCase().trim();

    return (val === 'true' || val === '');
  }

  return !!val;
}