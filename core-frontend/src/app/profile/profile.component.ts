import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string = 'John';
  surname: string = 'Sticky';

  constructor() {
    console.log('ProfileComponent loaded!')
   }

  ngOnInit() {
  }

  tabs: any[] = [
    {
      title: 'Posts',
      route: '/profile/posts',
    }, {
       title: 'Super posts',
       route: '/profile/superposts',
     }
  ];

}
