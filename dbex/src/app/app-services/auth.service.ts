import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: any) {
    let data: Array<string> = [];

    Object.keys(user).forEach((key) => {
      data.push(encodeURIComponent(key) + '=' + encodeURIComponent(user[key]));
    });

    return this.http.post('http://test.dbex.org/api/token', data.join('&') , {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).subscribe(data => {
      console.log(data);
      window.localStorage.setItem('appStorageData', JSON.stringify(data));
        console.log(data);
        return this.http.get('http://test.dbex.org/api' + '/company/' + data.companyId + '/project/26', {
          
        }).subscribe(data => console.log(7777, data))
    });
  }
}
