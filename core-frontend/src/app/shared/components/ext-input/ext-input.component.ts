import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ext-input',
  templateUrl: './ext-input.component.html',
  styleUrls: ['./ext-input.component.css']
})
export class ExtInputComponent implements OnInit, OnChanges {

  name: string = 'kek';

  @Input()
  labelText: string = '';
  @Input()
  isError: boolean = false;
  @Input()
  errorDefs: any;

  errorMessage:string = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:any):void {
    var errors: any = changes.inputErrors.currentValue;
    this.errorMessage = '';
    if (errors) {
      Object.keys(this.errorDefs).some(key => {
        if (errors[key]) {
          this.errorMessage = this.errorDefs[key];
          return true;
        }
      });
    }
  }

}
