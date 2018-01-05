import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() {
    console.log('ProfileComponent loaded!')
   }

  ngOnInit() {
  }

  tabs: any[] = [
    {
      title: 'Posts',
      route: '/pages/profile/posts',
    }, {
       title: 'Super posts',
       route: '/pages/profile/superposts',
     }
  ];

}
