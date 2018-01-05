import { UserService } from './../../@core/data/users.service';
import { User } from './../../shared/models/user.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

 
@Injectable()
export class ProfileResolver implements Resolve<User> {

  constructor(private us: UserService, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    let id = +route.paramMap.get('id');
 
    return this.us.getUser(id).take(1).map(user => {
      if (user) {
        return user;
      } else { // id not found
        //this.router.navigate(['/auth']);
        return null;
      }
    });
  }
}