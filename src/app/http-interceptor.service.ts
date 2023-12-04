import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import {environment} from '../environments/environment';

@Injectable()
export class HttpInterceptorService {

  TIME_CACHING = environment.timeCaching;

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const httpResponse = this.getCache(request.url);
    if (httpResponse) {
      return new Observable<HttpEvent<any>>(subscriber => {
        subscriber.next(new HttpResponse(httpResponse));
        subscriber.complete();
      });
    }

    return next.handle(request).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.setCache(request.url, event)
          }
        }),
        catchError((error: HttpErrorResponse) => {
          throw Error(error.message);
        }),
    );
  }

  setCache(url: string, value: HttpEvent<any>) {
    sessionStorage.setItem(url, JSON.stringify({ time: new Date().getTime(), response: value }))
  }

  getCache(url: string): HttpResponse<any> {
    const httpCall: { time: number, response: HttpResponse<any> } = JSON.parse(sessionStorage.getItem(url));
    if (httpCall?.time && ((httpCall.time + this.TIME_CACHING) >= new Date().getTime())) {
      return httpCall.response;
    }
    return;
  }

}
