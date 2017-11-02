import { Observable } from 'rxjs/Observable';
import { UserService } from './../../@core/data/users.service';
import { User } from './../../shared/models/user.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private user$: Observable<User>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: UserService) { 

      console.log('ProfileComponent loaded!');

        //this.router.navigate(['/profile', {id: 1}]);
  }

  ngOnInit() {

    console.log('ProfileComponent init!');

    // this.user$ = this.route.paramMap
    //   .switchMap((params: ParamMap) =>
    //     this.service.getUser(+params.get('id')));
  }

}
