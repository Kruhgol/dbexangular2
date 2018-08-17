import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let storage = JSON.parse(window.localStorage.getItem('appStorageData'));

        if (req.url.indexOf('token') > 0) {
            return next.handle(req);
        }

        let dupReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + storage.access_token)
                .set('Accept-Language', 'en-US,en;q=0.8')
        });

        return next.handle(dupReq);
    }
}