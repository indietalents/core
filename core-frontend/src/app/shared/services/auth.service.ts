import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { JwtHelper } from 'angular2-jwt'
import 'rxjs/add/operator/map'
import { tap } from 'rxjs/operators/tap';
import { catchError } from 'rxjs/operators/catchError';
declare var moment: any;

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    jwtHelper: JwtHelper = new JwtHelper();

    public isAuthenticated(): boolean {
        const currentUser = localStorage.getItem('currentUser');
        const token = JSON.parse(currentUser).token;
        // Check whether the token is expired and return
        // true or false
        console.log("isAuthenticated(): " + token + ", " + this.jwtHelper.isTokenExpired(token));
        return token && !this.jwtHelper.isTokenExpired(token);
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn, 'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }    

    login(model) {
        console.log("AuthService.login()");
        return this.http.post<any>('http://localhost:8080/auth', { username: model.username, password: model.password })
        .map(res => { debugger; res.json(); })
        .subscribe(
            (data) => {
              //let token = res.token;
              return true;
            },
            (error) => {
                console.log("error.status: " + error.status);
                if (error.status < 400 ||  error.status === 500) {
                    return Observable.throw(new Error(error.status));
                } else if (error.status === 401) {
                    console.log("Authorize error!");
                }
            });
            // .map((res: Response) => {
            //     debugger;
            //     if (res) {
            //         if (res.status === 201) {
            //             return [{ status: res.status, json: res }]
            //         }
            //         else if (res.status === 200) {
            //             // save token
            //             let token = res.json() && res.json().token;
            //             return [{ status: res.status, json: res }]
            //         }
            //     }
            //     return res;
            // })
            // .catch((error: any) => {
            //     console.log("error.status: " + error.status);
            //     if (error.status < 400 ||  error.status === 500) {
            //         return Observable.throw(new Error(error.status));
            //     } else if (error.status === 401) {
            //         console.log("Authorize error!");
            //     }
            // });
 


            // .map((res: Response) => {
            //     if (res) {
            //         if (res.status === 201) {
            //             return [{ status: res.status, json: res }]
            //         }
            //         else if (res.status === 200) {
            //             return [{ status: res.status, json: res }]
            //         }
            //     }
            // })
            // .catch((error: any) => {
            //     if (error.status < 400 ||  error.status === 500) {
            //         return Observable.throw(new Error(error.status));
            //     }
            // })
            // .subscribe(res => {
            //         debugger;
            //         console.log(res);
            //     },
            //     err => {
            //         debugger;
            //         console.log(err)
            //     } 
            // );

            // .map(res => {
            //     debugger;
            //     console.log('res: ' + res);
            //     // login successful if there's a jwt token in the response
            //     if (res && res.token) {
            //         // store user details and jwt token in local storage to keep user logged in between page refreshes
            //         localStorage.setItem('currentUser', JSON.stringify(res));
            //     }

            //     return res;
            // });
    }

    // private handleError (error: Response | any) {
    //     // In a real world app, you might use a remote logging infrastructure
    //     let errMsg: string;
    //     if (error instanceof Response) {
    //       const body = error.json() || '';
    //       const err = body.error || JSON.stringify(body);
    //       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //     } else {
    //       errMsg = error.message ? error.message : error.toString();
    //     }
    //     console.error(errMsg);
    //     return Observable.throw(errMsg);
    //   }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    private handleError(operation: String) {
        return (err: any) => {
            let errMsg = `error in ${operation}() retrieving `; // ${this.url}
            console.log(`${errMsg}:`, err)
            if(err instanceof HttpErrorResponse) {
                // you could extract more info about the error if you want, e.g.:
                console.log(`status: ${err.status}, ${err.statusText}`);
                // errMsg = ...
            }
            return Observable.throw(errMsg);
        }
    }
}