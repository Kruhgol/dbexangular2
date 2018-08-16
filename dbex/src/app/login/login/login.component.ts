import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forEach, values } from '@uirouter/core';

export class User {
  grant_type: string = 'password';
  client_id: string = 'ngAuthApp';
  constructor(public userName: string, public password: string) {
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  user: User = new User('', '');
  

  ngOnInit() {
    console.log(7777, this.user);
  }

  login(user: User) {
    let data: Array<string> = [];

    Object.keys(user).forEach((key) => {
      data.push(encodeURIComponent(key) + '=' + encodeURIComponent(user[key]));
    });

    return this.http.post('http://test.dbex.org/api/token', data.join('&') , {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).subscribe(
      (data: any) => {
        return this.http.post('http://test.dbex.org/api/category/documentsbyfilter', {}, {
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + data.access_token)
        }).subscribe((data: any) => {
          console.log(data);
        })
      }
    );
  }
}