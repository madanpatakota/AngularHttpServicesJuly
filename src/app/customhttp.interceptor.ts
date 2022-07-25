import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';



// Q) i want to make the http heeader each and every htpprequest?


@Injectable()
export class CustomhttpInterceptor implements HttpInterceptor {

  constructor() {}


  // team leads  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  
    let myhttpHeaders = new HttpHeaders({
       'role' : 'SuperAdmin',
       'myManagerEmailID'  : 'xyz@gmail.com'
    });


    console.log(request);

    let updateRequest = request.clone({
      headers: myhttpHeaders
    });
    //updateRequest.headers = httpHeaders;
    return next.handle(updateRequest);
  }
}
