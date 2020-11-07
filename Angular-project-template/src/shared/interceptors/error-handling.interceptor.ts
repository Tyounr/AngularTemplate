import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        let errorMsg = "";
        if (error.error instanceof ErrorEvent) {
          console.log(`Client side error occured: ${error.error.message}`);
        } else {
          console.log(`Server side error occured: ${error.error.message}`);
          switch (error.status) {
            case 200: // OK
              break;
            case 400: // Bad request - general error occured
              break;
            case 401: // Unauthorized - check authorization roles and/or token
              break;
            case 403: // Forbidden
              break;
            case 404: // Not found - correct endpoint? Check your
              break;
            case 415: // Unsupported Media Type - does HTTP match in front- and backend?
              break;
            case 418: // I'm a teapot :)
              break;
            case 500: // Internal server error
              break;
            default: // The rest of the errors
              break;
          }
        }
        console.log(errorMsg);
        return throwError(errorMsg);
      })
    );
  }
}
