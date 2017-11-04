import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'undefined-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  tabs: any[] = [
    {
      title: 'Profile',
      route: '/pages/profile/info',
    },
    {
      title: 'Posts',
      route: '/pages/profile/posts',
    },
  ];


  constructor() {
    console.log('ProfileComponent loaded!');
  }

  ngOnInit() {
    console.log('ProfileComponent inited!');
  }

}
