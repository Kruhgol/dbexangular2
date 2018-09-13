import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(private restangular: Restangular) { }

  get(id) {
    return this.restangular.one('documents', id).get();
  }
}
