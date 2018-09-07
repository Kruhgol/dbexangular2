import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forEach, values } from '@uirouter/core';
import { AuthService } from '../../app-services/auth.service';

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

  constructor(private http: HttpClient, private authService: AuthService) { }

  user: User = new User('', '');
  

  ngOnInit() {
    console.log(7777, this.user);
  }

  login(user:User) {
    return this.authService.login(user);
  }
}
