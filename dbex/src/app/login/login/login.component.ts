import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forEach, values } from '@uirouter/core';

export class User {
  constructor(public userName: string, public password: string) {}
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  user: User = {}

  ngOnInit() {
  }

  login(user: any) {
    let userAuth: Object = {
      grant_type: 'password',
      client_id: 'ngAuthApp',
      userName: user.userName,
      password: user.password
    }

    let data: Array<string> = [];

    Object.keys(userAuth).forEach((key) => {
      data.push(encodeURIComponent(key) + '=' + encodeURIComponent(userAuth[key]));
    });

    let b = [
      encodeURIComponent('grant_type') + '=' + encodeURIComponent('password'),
      encodeURIComponent('client_id') + '=' + encodeURIComponent('ngAuthApp'),
      encodeURIComponent('userName') + '=' + encodeURIComponent(user.userName),
      encodeURIComponent('password') + '=' + encodeURIComponent(user.password)
    ];

    let result: string = b.join('&');





    return this.http.post('http://test.dbex.org/api/token', result , {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Accept-Language', 'en-US,en;q=0.8')
    }).subscribe(
      (data) => {
        return this.http.post('http://test.dbex.org/api/category/documentsbyfilter', {}, {
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + data.access_token);
        }).subscribe((data) => {
          console.log(data);
        })
      };
    );
  }
}