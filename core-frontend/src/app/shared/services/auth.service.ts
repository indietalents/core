import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelper } from 'angular2-jwt'
import 'rxjs/add/operator/map'


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

    login(username: string, password: string) {
        console.log("AuthService.login()");
        return this.http.post<any>('http://localhost:8080/auth', { username: "user", password: "password" })
            .map(res => {
                debugger;
                console.log('res: ' + res);
                // login successful if there's a jwt token in the response
                if (res && res.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(res));
                }

                return res;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}