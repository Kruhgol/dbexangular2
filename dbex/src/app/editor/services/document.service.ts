import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(private http: HttpClient) { }

  get(id) {
    console.log('--get document--', id);
    return this.http.get('http://test.dbex.org/api/documents/' + id);
  }
}
