import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { CommonService } from "../Services/common.service";

@Injectable()
export class TokenHttpInterceptor implements HttpInterceptor {

    constructor(private api : CommonService ) {}
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const credToken = localStorage.getItem("BLGTKN") ?? ""; 
      const req = request.clone({
                setHeaders:{
                    'Authorization': 'Bearer ' + credToken
                }
            });
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
                this.api.Logout();
          }
          // Pass the error along if not unauthorized
          return throwError(error);
        })
      );
    }
  }