import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient, private restangular: Restangular) {}

  getTree() {
    return this.restangular.all('category').getList()
      .subscribe(data => console.log(22222, data));
  }

  getDocuments() {
    return this.restangular.one('category').post('documentsbyfilter', {});
  }
}
