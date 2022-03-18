import { HttpInterceptor, HttpRequest, HttpHandler , HttpEventType} from '@angular/common/http';

export class OtherInterceptService implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ){
        console.log('SECOND INTERCEPT')

        return next.handle(req)
    }
}