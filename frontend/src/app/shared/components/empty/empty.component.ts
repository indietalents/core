import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector:'empty-component',
  template: `
    <div style="background: rgb(81, 81, 81); padding:2px;">
      <h5 style="color:#eee">Empty Component</h5>
    </div>
  `
})
export class EmptyComponent {

  constructor() {}
}