//import { FormGroup } from '@angular/forms/src/model';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'msg-group',
  templateUrl: './msg-group.component.html',
  styleUrls: ['./msg-group.component.css']
})
export class MsgGroupComponent implements OnInit {

  type: MessageType = null;
  header: string = null;
  messages: string[] = null;

  // @Input()
  // form: FormGroup;

  constructor() { }

  ngOnInit() {
    //this.onChanges();
  }

  //set

  getType(): string {
    return (this.type == null ? '' : this.type.toString());
  }

}


enum MessageType {

  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
  COMPACT = "compact",

}
