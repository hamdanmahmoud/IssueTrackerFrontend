import { Injectable } from "@angular/core";

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`,
      },
    });

    console.log(request);

    return next.handle(request);
  }
}
