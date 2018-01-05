import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'super-posts',
  templateUrl: './super-posts.component.html',
  styleUrls: ['./super-posts.component.scss']
})
export class SuperPostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('SuperPostsComponent ngOnInit');
  }

}
