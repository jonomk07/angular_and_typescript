import { HttpInterceptor, HttpRequest, HttpHandler , HttpEventType} from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class InterceptService implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ){
       
        console.log('FIRST INTERCEPT')

        const authReq = req.clone({
            headers: req.headers.set('Authorization','sdjbfskjdbfksdf'),
           // url: req.url.replace('http://','https://')
        })

        return next.handle(authReq).pipe(
            tap( event => {
                if (event.type === HttpEventType.Sent) { console.log('started'); }
                if (event.type === HttpEventType.Response ) {
                    console.log('DONE');
                   return event.body;
                }
            })
        );
    }
}