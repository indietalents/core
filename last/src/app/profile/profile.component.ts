import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabs: any[] = [
    {
      title: 'Posts',
      route: '/profile/posts',
    },
    {
      title: 'superposts',
      route: '/profile/superposts',
    },
  ];

}
