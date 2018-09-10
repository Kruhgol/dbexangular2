import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getTree() {
    console.log(1111111111111);
    return this.http.get('http://test.dbex.org/api/category')
      .subscribe(data => console.log(22222, data));
  }
}
